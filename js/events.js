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
  colorButton
} from "./elements.js"

export default function({controls, timer, sound}) {

  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.pause()
  })

  buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.play()
  })

  buttonSet.addEventListener('click', function() {
    modalForm.classList.add('open')
  })

  formButton.addEventListener('click', function(e){
    e.preventDefault()
    let {minutes, seconds} = controls.getTime()
    timer.updateDisplay(minutes, seconds)
    timer.updateTime(minutes, seconds)
    modalForm.classList.remove('open')
  })

  document.querySelector('#color').oninput = (e) => {
    console.log(e.target.value)

    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);

    // console.log(rs.getPropertyValue('--base-color'))
    r.style.setProperty('--base-color', e.target.value);
  }

  colorButton.addEventListener('click', () => {
    console.log('asdasda')
    modalColor.classList.remove('open')
  })

  document.querySelector('.config').addEventListener('click', () => {
    modalColor.classList.add('open')
  })


}