let current = 0;
const pages = document.querySelectorAll(".page");

// Next page
function nextPage() {
  if (current < pages.length - 1) {
    pages[current].classList.remove("active");
    current++;
    pages[current].classList.add("active");
  }
}

// Final thank you
function thankYou() {
  alert("Thank you for being my favorite person 🌹❤️");
}

// Floating roses
const petals = document.querySelector(".petals");

setInterval(() => {
  const rose = document.createElement("span");
  rose.innerHTML = "🌹";
  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animationDuration = (Math.random() * 4 + 6) + "s";
  petals.appendChild(rose);

  setTimeout(() => {
    rose.remove();
  }, 8000);
}, 400);

// Swipe support (mobile)
let startX = 0;
document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextPage();
});
