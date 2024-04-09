const visual = document.getElementById("breathingVisual");
const instruction = document.getElementById("instruction");
const levelSelect = document.getElementById("levelSelect");
const startStop = document.getElementById("startStop");
const info = document.getElementById("info");
const infoPopup = document.getElementById("infoPopup");
const closePopup = document.getElementById("closePopup");

let intervalId;
let inhaleTime = 4;
let holdTime = 4;
let exhaleTime = 4;

function breathingCycle() {
  visual.classList.remove("hold2");
  visual.classList.add("inhale");
  instruction.innerText = "Inhale...";
  setTimeout(() => {
    visual.classList.remove("inhale");
    visual.classList.add("hold1");
    instruction.innerText = "Hold...";
    setTimeout(() => {
      visual.classList.remove("hold1");
      visual.classList.add("exhale");
      instruction.innerText = "Exhale...";
      setTimeout(() => {
        visual.classList.remove("exhale");
        visual.classList.add("hold2");
        instruction.innerText = "Hold...";
      }, exhaleTime * 1000);
    }, holdTime * 1000);
  }, inhaleTime * 1000);
}

function startBreathing() {
  intervalId = setInterval(breathingCycle, (inhaleTime + holdTime + exhaleTime + holdTime) * 1000);
  breathingCycle();
  startStop.innerText = "Stop";
}

function stopBreathing() {
  clearInterval(intervalId);
  visual.className = "w-64 h-64 rounded-full border-8 border-blue-500 flex justify-center items-center text-blue-500 text-xl";
  instruction.innerText = "Click Start";
  startStop.innerText = "Start";
}

levelSelect.addEventListener("change", () => {
  if (levelSelect.value === "beginner") {
    inhaleTime = holdTime = exhaleTime = 4;
  } else if (levelSelect.value === "intermediate") {
    inhaleTime = holdTime = exhaleTime = 6;
  } else if (levelSelect.value === "expert") {
    inhaleTime = holdTime = exhaleTime = 8;
  }
  stopBreathing();
});

startStop.addEventListener("click", () => {
  if (startStop.innerText === "Start") {
    startBreathing();
  } else {
    stopBreathing();
  }
});

info.addEventListener("click", () => {
  infoPopup.classList.remove("hidden");
});

closePopup.addEventListener("click", () => {
  infoPopup.classList.add("hidden");
});
