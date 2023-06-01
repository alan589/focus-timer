export default function Config({ root, body, darkMode, colorButton }) {
  function getLocalStorage() {
    return JSON.parse(localStorage.getItem("config"));
  }

  function setColorLocalStorage(color) {
    const configJson = getLocalStorage();
    configJson.color = color;
    localStorage.setItem("config", JSON.stringify(configJson));
  }
  function setDarkModeLocalStorage(isDarkModeOn) {
    const configJson = getLocalStorage();
    configJson.darkMode = isDarkModeOn;
    localStorage.setItem("config", JSON.stringify(configJson));
  }

  function setInitialConfigPage() {
    const configJson = getLocalStorage();
    if (configJson) {
      root.style.setProperty("--base-color", configJson.color);
      const isDarkmodeOn = configJson.darkMode;

      if (isDarkmodeOn) {
        body.classList.add("darkmode-on");
        darkMode.classList.add("on");
        colorButton.classList.add("on");
      } else {
        body.classList.remove("darkmode-on");
        darkMode.classList.remove("on");
        colorButton.classList.remove("on");
      }
    } else {
      const config = {
        color: 194,
        darkMode: false,
      };
      localStorage.setItem("config", JSON.stringify(config));
      root.style.setProperty("--base-color", config.color);
    }
  }

  return {
    setColorLocalStorage,
    setDarkModeLocalStorage,
    setInitialConfigPage,
  };
}
