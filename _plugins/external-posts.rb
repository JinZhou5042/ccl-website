require 'feedjira'
require 'httparty'
require 'jekyll'
require 'nokogiri'
require 'time'

module ExternalPosts
  class ExternalPostsGenerator < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      # Allow disabling external fetching by env or config to keep builds reproducible/offline
      if ENV['SKIP_EXTERNAL'] == '1' || site.config['external_sources_enabled'] == false
        Jekyll.logger.info "ExternalPosts:", "skipping external fetch (SKIP_EXTERNAL=1 or external_sources_enabled=false)"
        return
      end
      if site.config['external_sources'] != nil
        site.config['external_sources'].each do |src|
          Jekyll.logger.info "ExternalPosts:", "Fetching external posts from #{src['name']}:"
          if src['rss_url']
            fetch_from_rss(site, src)
          elsif src['posts']
            fetch_from_urls(site, src)
          end
        end
      end
    end

    def fetch_from_rss(site, src)
      xml = safe_http_get(src['rss_url'])
      return if xml.nil?
      begin
        feed = Feedjira.parse(xml)
        process_entries(site, src, feed.entries)
      rescue => e
        Jekyll.logger.warn "ExternalPosts:", "failed to parse RSS for #{src['name']}: #{e.class} - #{e.message}"
      end
    end

    def process_entries(site, src, entries)
      entries.each do |e|
        Jekyll.logger.info "ExternalPosts:", "...fetching #{e.url}"
        create_document(site, src['name'], e.url, {
          title: e.title,
          content: e.content,
          summary: e.summary,
          published: e.published
        })
      end
    end

    def create_document(site, source_name, url, content)
      # check if title is composed only of whitespace or foreign characters
      if content[:title].gsub(/[^\w]/, '').strip.empty?
        # use the source name and last url segment as fallback
        slug = "#{source_name.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')}-#{url.split('/').last}"
      else
        # parse title from the post or use the source name and last url segment as fallback
        slug = content[:title].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
        slug = "#{source_name.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')}-#{url.split('/').last}" if slug.empty?
      end

      path = site.in_source_dir("_posts/#{slug}.md")
      doc = Jekyll::Document.new(
        path, { :site => site, :collection => site.collections['posts'] }
      )
      doc.data['external_source'] = source_name
      doc.data['title'] = content[:title]
      doc.data['feed_content'] = content[:content]
      doc.data['description'] = content[:summary]
      doc.data['date'] = content[:published]
      doc.data['redirect'] = url
      doc.content = content[:content]
      site.collections['posts'].docs << doc
    end

    def fetch_from_urls(site, src)
      src['posts'].each do |post|
        Jekyll.logger.info "ExternalPosts:", "...fetching #{post['url']}"
        content = fetch_content_from_url(post['url'])
        next if content.nil?
        content[:published] = parse_published_date(post['published_date'])
        create_document(site, src['name'], post['url'], content)
      end
    end

    def parse_published_date(published_date)
      begin
        case published_date
        when String
          Time.parse(published_date).utc
        when Date
          published_date.to_time.utc
        else
          Time.now.utc
        end
      rescue => e
        Jekyll.logger.warn "ExternalPosts:", "invalid date '#{published_date}': #{e.class} - #{e.message}; using now()"
        Time.now.utc
      end
    end

    def fetch_content_from_url(url)
      html = safe_http_get(url)
      return nil if html.nil?
      parsed_html = Nokogiri::HTML(html)

      title = parsed_html.at('head title')&.text.strip || ''
      description = parsed_html.at('head meta[name="description"]')&.attr('content')
      description ||= parsed_html.at('head meta[name="og:description"]')&.attr('content')
      description ||= parsed_html.at('head meta[property="og:description"]')&.attr('content')

      body_content = parsed_html.search('p').map { |e| e.text }
      body_content = body_content.join() || ''

      {
        title: title,
        content: body_content,
        summary: description
        # Note: The published date is now added in the fetch_from_urls method.
      }
    end

    private

    def safe_http_get(url)
      begin
        resp = HTTParty.get(url, timeout: 10)
        unless resp.respond_to?(:code) && resp.code.to_i == 200
          Jekyll.logger.warn "ExternalPosts:", "GET #{url} returned #{resp.code rescue 'unknown status'}; skipping"
          return nil
        end
        resp.body
      rescue SocketError, Errno::ENETUNREACH, Errno::EHOSTUNREACH, Net::OpenTimeout, Net::ReadTimeout => e
        Jekyll.logger.warn "ExternalPosts:", "network error fetching #{url}: #{e.class} - #{e.message}; skipping"
        nil
      rescue HTTParty::Error, StandardError => e
        Jekyll.logger.warn "ExternalPosts:", "error fetching #{url}: #{e.class} - #{e.message}; skipping"
        nil
      end
    end

  end
end
