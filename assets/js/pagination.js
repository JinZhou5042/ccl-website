/**
 * Client-side pagination for static sites
 * Reads URL hash (#page=2) and shows/hides posts accordingly
 */
(function () {
  "use strict";

  function initPagination() {
    const containers = document.querySelectorAll("[data-posts-per-page]");

    containers.forEach((container) => {
      const postsPerPage = parseInt(container.dataset.postsPerPage) || 16;
      const totalPages = parseInt(container.dataset.totalPages) || 1;
      const postContainer = container.querySelector("[data-post-container]");
      const paginationNav = container.querySelector("[data-pagination-nav]");

      if (!postContainer || totalPages <= 1) return;

      function getCurrentPage() {
        const hash = window.location.hash;
        const match = hash.match(/#page=(\d+)/);
        const page = match ? parseInt(match[1]) : 1;
        return Math.max(1, Math.min(page, totalPages));
      }

      function showPage(pageNum) {
        // Show/hide posts
        const posts = postContainer.querySelectorAll(".post-item");
        posts.forEach((post) => {
          const postPage = parseInt(post.dataset.page);
          if (postPage === pageNum) {
            post.style.display = "";
          } else {
            post.style.display = "none";
          }
        });

        // Update pagination controls
        if (paginationNav) {
          // Update active page
          paginationNav
            .querySelectorAll("[data-pagination-page]")
            .forEach((pageItem) => {
              const itemPage = parseInt(pageItem.dataset.paginationPage);
              if (itemPage === pageNum) {
                pageItem.classList.add("active");
              } else {
                pageItem.classList.remove("active");
              }
            });

          // Update prev/next buttons
          const prevBtn = paginationNav.querySelector("[data-pagination-prev]");
          const nextBtn = paginationNav.querySelector("[data-pagination-next]");

          if (prevBtn) {
            const prevLink = prevBtn.querySelector("a");
            if (pageNum <= 1) {
              prevBtn.classList.add("disabled");
              prevLink.setAttribute("tabindex", "-1");
              prevLink.setAttribute("aria-disabled", "true");
            } else {
              prevBtn.classList.remove("disabled");
              prevLink.removeAttribute("tabindex");
              prevLink.removeAttribute("aria-disabled");
              prevLink.href = "#page=" + (pageNum - 1);
            }
          }

          if (nextBtn) {
            const nextLink = nextBtn.querySelector("a");
            if (pageNum >= totalPages) {
              nextBtn.classList.add("disabled");
              nextLink.setAttribute("tabindex", "-1");
              nextLink.setAttribute("aria-disabled", "true");
            } else {
              nextBtn.classList.remove("disabled");
              nextLink.removeAttribute("tabindex");
              nextLink.removeAttribute("aria-disabled");
              nextLink.href = "#page=" + (pageNum + 1);
            }
          }
        }
      }

      // Initialize on page load (without scrolling)
      const initialPage = getCurrentPage();
      showPage(initialPage);

      // Handle hash changes (with scrolling)
      window.addEventListener("hashchange", function () {
        const page = getCurrentPage();
        showPage(page);
        // Only scroll when user navigates between pages
        container.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPagination);
  } else {
    initPagination();
  }
})();
