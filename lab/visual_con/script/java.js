let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);

var myAudio = document.getElementById("myAudio");

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};


var amor = document.getElementById("amor");

function amorPlay() {
  return amor.paused ? amor.play() : amor.pause();
};

var tonight = document.getElementById("tonight");

function tonightPlay() {
  return tonight.paused ? tonight.play() : tonight.pause();
};

