// Normalize bare relative links like "jobs" to respect site.baseurl.
// This ensures [Jobs](jobs) resolves to /<baseurl>/jobs instead of current-url/jobs.
(function () {
  if (typeof document === "undefined") return;

  document.addEventListener("DOMContentLoaded", function () {
    var baseurl = window.__BASEURL__ || "";
    // Normalize base path prefix, '' -> '', '/foo' -> '/foo'
    // We'll add a trailing slash when composing
    var prefix = baseurl;

    var anchors = document.querySelectorAll("a[href]");
    anchors.forEach(function (a) {
      var href = a.getAttribute("href");
      if (!href) return;

      // Ignore anchors, protocols, data URIs, JS, and absolute URLs
      var lower = href.toLowerCase();
      if (
        lower.startsWith("#") ||
        lower.startsWith("http://") ||
        lower.startsWith("https://") ||
        lower.startsWith("mailto:") ||
        lower.startsWith("tel:") ||
        lower.startsWith("javascript:") ||
        lower.startsWith("data:")
      ) {
        return;
      }

      // Respect existing root-absolute or dot-relative links
      if (
        lower.startsWith("/") ||
        lower.startsWith("./") ||
        lower.startsWith("../")
      ) {
        return;
      }

      // At this point, href is a bare relative like "jobs" or "jobs/"
      // Compose new href: <baseurl>/<href>
      var needsSlash = prefix.length > 0 && !prefix.endsWith("/");
      var newHref =
        (needsSlash ? prefix + "/" : prefix) + href.replace(/^\/?/, "");

      // Only update if it actually changes
      if (newHref !== href) {
        a.setAttribute("href", newHref);
      }
    });
  });
})();
