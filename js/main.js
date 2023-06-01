import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import Config from "./config.js";
import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
  inputMinutes,
  inputSeconds,
  root,
  body,
  colorButton,
  darkMode,
} from "./elements.js";

const config = Config({
  root,
  body,
  colorButton,
  darkMode,
});

config.setInitialConfigPage();

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  inputMinutes,
  inputSeconds,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sound();

Events({ controls, timer, sound, config });
