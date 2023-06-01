import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
  formButton,
  modalForm,
  modalColor,
  colorButton,
  colorInput,
  colorModalButton,
  root,
  rootStyles,
  darkMode,
  body,
} from "./elements.js";

export default function ({ controls, timer, sound, config }) {
  buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  buttonPause.addEventListener("click", function () {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", function () {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  buttonSoundOff.addEventListener("click", function () {
    buttonSoundOn.classList.remove("hide");
    buttonSoundOff.classList.add("hide");
    sound.bgAudio.play();
  });

  buttonSoundOn.addEventListener("click", function () {
    buttonSoundOn.classList.add("hide");
    buttonSoundOff.classList.remove("hide");
    sound.bgAudio.pause();
  });

  buttonSet.addEventListener("click", function () {
    modalForm.classList.add("open");
  });

  formButton.addEventListener("click", function (e) {
    e.preventDefault();
    let { minutes, seconds } = controls.getTime();
    timer.updateDisplay(minutes, seconds);
    timer.updateTime(minutes, seconds);
    modalForm.classList.remove("open");
  });

  // REFATORAR TODO O CODIGO ABAIXO E GUARDAR OS DADOS NO BD DO BROWSER

  colorInput.addEventListener("input", (e) => {
    root.style.setProperty("--base-color", e.target.value);
    config.setColorLocalStorage(e.target.value);
  });

  colorButton.addEventListener("click", () => {
    modalColor.classList.add("open");
  });

  colorModalButton.addEventListener("click", () => {
    modalColor.classList.remove("open");
  });

  darkMode.addEventListener("click", () => {
    darkMode.classList.toggle("on");
    colorButton.classList.toggle("on");
    body.classList.toggle("darkmode-on");

    const isDarkmodeOn = body.classList.contains("darkmode-on");

    if (isDarkmodeOn) config.setDarkModeLocalStorage(true);
    else config.setDarkModeLocalStorage(false);
  });
}
