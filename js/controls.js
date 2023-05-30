export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  inputMinutes,
  inputSeconds
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }
  
  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function getTime() {
    const minutes = inputMinutes.value
    const seconds = inputSeconds.value

    // if (!newMinutes) {
    //   return false
    // }

    return {minutes, seconds}
  }

  return {
    reset,
    play,
    pause,
    getTime
  }
}