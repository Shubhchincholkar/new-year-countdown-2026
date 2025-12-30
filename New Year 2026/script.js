function clock() {
  let secdots = document.getElementById("secDots");
  let mindots = document.getElementById("minDots");
  let hrdots = document.getElementById("hrDots");

  var now = new Date();
  var newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
  var diff = newYear - now;

  var totalSeconds = Math.floor(diff / 1000);

  var seconds = totalSeconds % 60;
  var totalMinutes = Math.floor(totalSeconds / 60);
  var minutes = totalMinutes % 60;
  var hours = Math.floor(totalMinutes / 60); // ✅ TOTAL HOURS (27, 26, 25...)

  /* ---------- SECONDS DOTS ---------- */
  var secondsDots = "";
  for (var i = 0; i < 61; i++) {
    var rotation = i * 6;
    secondsDots += `<div class="dot ${i === seconds ? "active" : ""}"
       style="transform: rotate(${rotation}deg)"></div>`;
  }

  /* ---------- MINUTES DOTS ---------- */
  var minutesDots = "";
  for (var i = 0; i < 61; i++) {
    var rotation = i * 6;
    minutesDots += `<div class="dot ${i === minutes ? "active" : ""}"
       style="transform: rotate(${rotation}deg)"></div>`;
  }

  /* ---------- HOURS DOTS (0–60 SCALE) ---------- */
  var hoursDots = "";
  for (var i = 0; i < 50; i++) {
    var rotation = i * 8;
    hoursDots += `<div class="dot ${i === hours ? "active" : ""}"
       style="transform: rotate(${rotation}deg)"></div>`;
  }

  secdots.innerHTML =
    secondsDots + `<h2>${zero(seconds)}<br><span>Seconds</span></h2>`;

  mindots.innerHTML =
    minutesDots + `<h2>${zero(minutes)}<br><span>Minutes</span></h2>`;

  hrdots.innerHTML = hoursDots + `<h2>${hours}<br><span>Hours</span></h2>`;
}

function zero(n) {
  return n < 10 ? "0" + n : n;
}

setInterval(clock, 1000);
clock();

// text chnage after time over
let nyText = document.getElementById("nyText");

if (diff <= 0) {
  nyText.innerHTML = "NEW YEAR 2026 INITIALIZED 🎉";
  nyText.style.color = "#22c55e";
  nyText.style.textShadow =
    "0 0 10px rgba(34,197,94,1), 0 0 30px rgba(34,197,94,0.9)";
  nyText.style.animation = "none";
}

