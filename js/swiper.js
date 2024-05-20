const reviews = document.querySelectorAll(".review-item");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const dots = document.querySelectorAll(".dot-item");
let currentIndex = 0;

function updateVisibility() {
  reviews.forEach((review, i) => {
    review.style.display = i === currentIndex ? "block" : "none";
  });
}
function updateDot() {
  dots.forEach((dot, i) => {
    if (i === currentIndex) {
      dot.classList.add("dot-active");
    } else {
      dot.classList.remove("dot-active");
    }
  });
}
function nextReview() {
  currentIndex++;
  if (currentIndex > reviews.length - 1) {
    currentIndex = reviews.length - 1;
  }
  updateVisibility();
  updateDot();
}

function prevReview() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  updateVisibility();
  updateDot();
}

nextBtn.addEventListener("click", nextReview);
prevBtn.addEventListener("click", prevReview);

// Initially show the first review
updateVisibility();
updateDot();
