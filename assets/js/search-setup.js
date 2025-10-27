let searchTheme = determineComputedTheme();
const ninjaKeys = document.querySelector("ninja-keys");

if (ninjaKeys) {
  if (searchTheme === "dark") {
    ninjaKeys.classList.add("dark");
  } else {
    ninjaKeys.classList.remove("dark");
  }
}

const openSearchModal = () => {
  // collapse navbarNav if expanded on mobile
  if (typeof $ !== "undefined") {
    const $navbarNav = $("#navbarNav");
    if ($navbarNav.hasClass("show")) {
      $navbarNav.collapse("hide");
    }
  }
  if (ninjaKeys && typeof ninjaKeys.open === "function") {
    ninjaKeys.open();
  }
};
