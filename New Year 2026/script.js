const nyText = document.getElementById("nyText");
const secdots = document.getElementById("secDots");
const mindots = document.getElementById("minDots");
const hrdots = document.getElementById("hrDots");

// FIXED target year
const TARGET_YEAR = 2026;
const newYear = new Date(TARGET_YEAR, 0, 1, 0, 0, 0);

let timer = setInterval(clock, 1000);
clock();

function clock() {
  const now = new Date();
  let diff = newYear - now;

  let totalSeconds = Math.max(0, Math.floor(diff / 1000));
  let seconds = totalSeconds % 60;
  let totalMinutes = Math.floor(totalSeconds / 60);
  let minutes = totalMinutes % 60;
  let hours = Math.floor(totalMinutes / 60);

  // ---------- SECONDS DOTS ----------
  let secondsDots = "";
  for (let i = 0; i <= 60; i++) {
    secondsDots += `<div class="dot ${i === seconds ? "active" : ""}"
      style="transform: rotate(${i * 6}deg)"></div>`;
  }

  // ---------- MINUTES DOTS ----------
  let minutesDots = "";
  for (let i = 0; i <= 60; i++) {
    minutesDots += `<div class="dot ${i === minutes ? "active" : ""}"
      style="transform: rotate(${i * 6}deg)"></div>`;
  }

  // ---------- HOURS DOTS ----------
  let hoursDots = "";
  for (let i = 0; i < 50; i++) {
    hoursDots += `<div class="dot ${i === hours ? "active" : ""}"
      style="transform: rotate(${i * 8}deg)"></div>`;
  }

  secDots.innerHTML =
    secondsDots + `<h2>${pad(seconds)}<br><span>Seconds</span></h2>`;

  minDots.innerHTML =
    minutesDots + `<h2>${pad(minutes)}<br><span>Minutes</span></h2>`;

  hrDots.innerHTML = hoursDots + `<h2>${pad(hours)}<br><span>Hours</span></h2>`;

  // 🛑 STOP & SHOW MESSAGE (after rendering dots)
  if (diff <= 0) {
    clearInterval(timer);

    nyText.innerHTML = "NEW YEAR 2026 INITIALIZED 🎉";
    nyText.style.color = "#22c55e";
    nyText.style.textShadow =
      "0 0 10px rgba(34,197,94,1), 0 0 30px rgba(34,197,94,0.9)";
    nyText.style.animation = "none";
  }
}

function pad(n) {
  return n < 10 ? "0" + n : n;
}
