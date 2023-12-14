const musicEle = document.querySelector(".fa-solid.fa-4x.fa-music");
const playEle = document.querySelector(".fa-solid.fa-3x.fa-play");
const progressBar = document.getElementById("progress");
let audioElement = new Audio("song/itsokay.mp3");

function Play() {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    musicEle.setAttribute("id", "main-icon");
    playEle.setAttribute("class", "fa-solid fa-3x fa-pause");
  } else {
    audioElement.pause();
    musicEle.removeAttribute("id", "main-icon");
    playEle.setAttribute("class", "fa-solid fa-3x fa-play");
  }
}

progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressBar.value = progress;
  console.log(progress);
  if (progress == 100) {
    musicEle.removeAttribute("id", "main-icon");
    playEle.setAttribute("class", "fa-solid fa-3x fa-play");
    progressBar.value = 0;
  }
});
