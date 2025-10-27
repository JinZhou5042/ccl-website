// Minimal theme utilities always available, even if dark mode is disabled.
// These definitions are intentionally lightweight and side-effect free.
// If /assets/js/theme.js is loaded, it will redefine these with full behavior.

(function () {
  if (typeof window === "undefined") return;

  function safeMatchDark() {
    try {
      return (
        typeof window.matchMedia !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch (e) {
      return false;
    }
  }

  // Read the user's theme preference from localStorage.
  // Returns one of: "dark", "light", or "system" (default).
  function determineThemeSetting() {
    try {
      var themeSetting = localStorage.getItem("theme");
      if (
        themeSetting === "dark" ||
        themeSetting === "light" ||
        themeSetting === "system"
      ) {
        return themeSetting;
      }
    } catch (e) {
      // ignore
    }
    return "system";
  }

  // Compute the current theme: "dark" or "light".
  function determineComputedTheme() {
    try {
      var setting = determineThemeSetting();
      if (setting === "system") {
        return safeMatchDark() ? "dark" : "light";
      }
      return setting; // "dark" or "light"
    } catch (e) {
      return "light";
    }
  }

  // Expose globally only if not already defined (theme.js may override later).
  if (typeof window.determineThemeSetting === "undefined") {
    window.determineThemeSetting = determineThemeSetting;
  }
  if (typeof window.determineComputedTheme === "undefined") {
    window.determineComputedTheme = determineComputedTheme;
  }
})();
