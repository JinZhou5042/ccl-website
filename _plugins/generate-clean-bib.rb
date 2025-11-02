require 'fileutils'

Jekyll::Hooks.register :site, :post_write do |site|
  # Read the source bib file
  bib_source = File.join(site.source, '_bibliography', 'papers.bib')
  bib_content = File.read(bib_source)
  
  # Get filtered keywords from config
  keywords = site.config['filtered_bibtex_keywords'] || []
  
  # Remove custom fields
  keywords.each do |keyword|
    bib_content = bib_content.gsub(/^.*\b#{keyword}\b *= *\{.*$\n/, '')
  end
  
  # Clean superscripts in author lists
  bib_content = bib_content.gsub(/^.*\bauthor\b *= *\{.*$\n/) { |line| line.gsub(/[*†‡§¶‖&^]/, '') }
  
  # Get output filename from config, default to 'cclpapers'
  output_filename = site.config.dig('scholar', 'clean_bib_filename') || 'cclpapers'
  
  # Write the cleaned bib file
  output_dir = File.join(site.dest, 'assets', 'bibliography')
  FileUtils.mkdir_p(output_dir)
  output_file = File.join(output_dir, "#{output_filename}.bib")
  File.write(output_file, bib_content)
  
  puts "Generated clean BibTeX file at #{output_file}"
end
