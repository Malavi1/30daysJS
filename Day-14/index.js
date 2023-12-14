// const play = document.querySelector(".fa-solid.fa-play");
// const reset = document.querySelector(".fa-solid.fa-power-off");
// const pause = document.querySelector(".fa-regular.fa-circle-dot");
const display = document.getElementById("stopwatch");

let timer = null;
let seconds = 0;
let minutes = 0;
let hours = 0;
function count() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 0) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerHTML = h + ":" + m + ":" + s;
  console.log(s);
  console.log(timer);
}

function stopWatch() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(count, 1000);
}

function clearbtn() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  display.innerHTML = "00:00:00";
}
function pausebtn() {
  clearInterval(timer);
}
