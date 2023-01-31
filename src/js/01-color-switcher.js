const refs ={
bodyColor: document.querySelector('body'),
startButton: document.querySelector('[data-start]'),
stopButton: document.querySelector('[data-stop]'),
}

refs.startButton.addEventListener('click', start);
refs.stopButton.addEventListener('click', stop);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  function changeBackgroundColor(color){
    refs.bodyColor.style.backgroundColor = color;
  }

  let intervalColorChange = undefined;
  function start(){
    intervalColorChange = setInterval (randomColor => {
        randomColor = getRandomHexColor();
        changeBackgroundColor(randomColor);
    },1000);
    refs.stopButton.removeAttribute('disabled');
    refs.startButton.getAttribute('disabled', true);
  }
  function stop(){
    clearInterval(intervalColorChange);
    refs.startButton.removeAttribute('disabled');
    refs.stopButton.setAttribute('disabled', true);
  }

