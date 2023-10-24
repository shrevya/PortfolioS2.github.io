//! ------CURSOR =================
const cursor = document.querySelector(".cursor");

// Function to animate the cursor
const animateCursor = (g, interact, isClick) => {
  const p = g.clientX - cursor.offsetWidth / 2;
  const q = g.clientY - cursor.offsetHeight / 2;
  const scale = isClick || interact ? 5 : 3; // Cursor becomes twice as large on interaction


  const keyframes = {
    transform: `translate(${p}px, ${q}px) scale(${scale})`,
  };

  cursor.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });
};

window.onmousemove = (g) => {
  const interactElement = g.target.closest(".interactable");
  const interact = interactElement !== null;

  animateCursor(g, interact, false);
};

window.onclick = (g) => {
  const interactElement = g.target.closest(".interactable");
  const interact = interactElement !== null;

  animateCursor(g, interact, true);
};




//!======================= GLOW EFFECT =======================
const handleOnMouseMove = (e) => {
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

for (const card of document.querySelectorAll) {
  card.onmousemove = (e) => handleOnMouseMove(e);
}


//! =============NAVIGATION =======================

const navBtn = document.querySelectorAll("[data-button]");
const projects = document.querySelectorAll("[data-project]");

function showProject(project) {
  projects.forEach((e) => e.classList.remove("active"));

  document.querySelectorAll(`#${project}`).forEach((e) => {
    e.classList.add("active");
  });
}

function deactivateBTN() {
  navBtn.forEach((e) => e.classList.remove("btn-active"));
}

navBtn.forEach(
  (btn) =>
    (btn.onclick = function () {
      showProject(this.dataset.button);
      deactivateBTN();
      btn.classList.add("btn-active");
    })
);

// !---------------------- SLIDING TEXT -------------------------------

// JavaScript for Text Animation
const slidingText = document.querySelector(".sliding-text-content");
const textList = [
  "Data Scientist",
  "Detective",
  "Data Analyst",
  "Seeker",
  "Lifelong Learner"
];

let currentIndex = 0;
let charIndex = 0;

function changeText() {
  if (charIndex <= textList[currentIndex].length) {
    slidingText.textContent = textList[currentIndex].substring(0, charIndex);
    charIndex++;
    setTimeout(changeText, 100); // Adjust the delay to control typing speed
  } else {
    setTimeout(() => {
      charIndex = 0;
      currentIndex = (currentIndex + 1) % textList.length; // Loop through the textList
      changeText(); // Start typing the next text
    }, 1000); // Delay before starting the next text
  }
}

changeText();

























