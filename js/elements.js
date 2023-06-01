const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const formButton = document.querySelector(".form-button");
const colorButton = document.querySelector(".color");
const colorInput = document.querySelector("#color-input");
const colorModalButton = document.querySelector(".color-modal-button");
const modalForm = document.querySelector(".modal-form");
const modalColor = document.querySelector(".modal-color");
const inputMinutes = document.querySelector("#input-minutes");
const inputSeconds = document.querySelector("#input-seconds");
const root = document.querySelector(":root");
const rootStyles = getComputedStyle(root);
const darkMode = document.querySelector(".dark-mode");
const body = document.querySelector("body");

export {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplay,
  secondsDisplay,
  formButton,
  modalForm,
  modalColor,
  inputMinutes,
  inputSeconds,
  colorButton,
  colorInput,
  colorModalButton,
  root,
  rootStyles,
  darkMode,
  body,
};
