function initDarkTheme() {
  let darkTheme = localStorage.getItem("dark-theme-enabled") === "true";
  toggleDarkTheme(set = darkTheme, save = false);

  function toggleDarkTheme(setDarkTheme = null, save = true) {
    const darkThemeEnabled = setDarkTheme !== null ? !setDarkTheme : document.body.classList.contains("dark-theme");
    const chromeBar = document.querySelector('meta[name="theme-color"]');
    if (darkThemeEnabled) {
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
    }
    if (!(setDarkTheme !== null && !setDarkTheme)) {
      switchAttr(chromeBar, "content", "darkThemeContent")
      toggleImages();
    }
    if (save) localStorage.setItem("dark-theme-enabled", !darkThemeEnabled);
  }

  function toggleImages() {
    document.querySelectorAll("img[data-dark-theme-src]").forEach(node => {
      node.style.opacity = 0;
    });
    document.querySelector("#toggle-theme").classList.add("disabled");
    
    setTimeout(function () {
      document.querySelectorAll("img[data-dark-theme-src]").forEach(node => {
        switchAttr(node, "src", "darkThemeSrc");
        node.style.opacity = 1;
      });
      document.querySelector("#toggle-theme").classList.remove("disabled");
    }, 250);
  }

  document.querySelector("#toggle-theme").addEventListener("click", function () {
    toggleDarkTheme();
  });
}