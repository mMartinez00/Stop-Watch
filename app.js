const toggle = document.getElementById("switch");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const millisecs = document.getElementById("millisecs");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
let [min, secs, msecs] = [00, 00, 00];
let interval;

toggle.addEventListener("change", () => {
  const body = document.querySelector("body");

  body.classList.toggle("light-theme");
});

start.addEventListener("click", () => {
  interval = setInterval(startTimer, 10);
});

pause.addEventListener("click", () => {
  clearInterval(interval);
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  msecs = 00;
  secs = 00;
  min = 00;
  millisecs.innerText = "00";
  seconds.innerText = "00";
  minutes.innerText = "00";
});

function startTimer() {
  msecs++;

  if (msecs <= 9) {
    millisecs.innerText = "0" + msecs;
  }

  if (msecs > 9) {
    millisecs.innerText = msecs;
  }

  if (msecs > 99) {
    secs++;
    seconds.innerText = secs;
    msecs = 0;
    millisecs.innerText = "0" + 0;
  }

  if (secs <= 9) {
    seconds.innerText = "0" + secs;
  }

  if (secs > 59) {
    min++;
    secs = 00;
    minutes.innerText = min;
  }

  if (min <= 9) {
    minutes.innerText = "0" + min;
  }
}
