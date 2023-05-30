import Sounds from "./sounds.js"

export default function Timer({ 
  minutesDisplay, 
  secondsDisplay, 
  resetControls,
  sound
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  function updateDisplay(newMinutes, newSeconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    newSeconds = newSeconds === undefined ? seconds : newSeconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(newSeconds).padStart(2, "0")
  }

  function reset() {
    updateDisplay(minutes, seconds)
    clearTimeout(timerTimeOut)
  }

  function countdown(){
    let seconds =  Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let countdownTime = new  Date(new Date().getTime() + (minutes * 60000) + (seconds * 1000));
    let countDownDate = new Date(countdownTime).getTime();
    
    updateDisplay(minutes, seconds)

    timerTimeOut = setInterval(function() {
      let now = new Date().getTime();
      let distance = countDownDate - now;
        
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      updateDisplay(minutes, seconds)
        
      if (distance < 0) {
        clearInterval(timerTimeOut);
        resetControls()
        updateDisplay()
        Sounds().timeEnd()
      }
    }, 300);
  }

  function updateTime(newMinutes, newSeconds) {
    minutes = newMinutes
    seconds = newSeconds
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateTime,
    hold
  }
}