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
} from "./elements.js";

export default function ({ controls, timer, sound }) {
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

  document.querySelector("#color-input").oninput = (e) => {
    let root = document.querySelector(":root");
    root.style.setProperty("--base-color", e.target.value);
  };

  colorButton.addEventListener("click", () => {
    modalColor.classList.add("open");
  });

  document
    .querySelector(".color-modal-button")
    .addEventListener("click", () => {
      modalColor.classList.remove("open");
    });

  document.querySelector(".dark-mode").onclick = (e) => {
    document.querySelector(".dark-mode").classList.toggle("on");
    document.querySelector(".color").classList.toggle("on");

    let root = document.querySelector(":root");
    let rootStyles = getComputedStyle(root);

    const bgColor = rootStyles.getPropertyValue("--bg-color");

    if (bgColor === "#fff") {
      root.style.setProperty("--bg-color", "#000");
      root.style.setProperty("--text-color", "#fff");
    } else {
      root.style.setProperty("--bg-color", "#fff");
      root.style.setProperty("--text-color", "#000");
    }
  };
}
