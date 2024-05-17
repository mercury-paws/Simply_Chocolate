const reviews = document.querySelectorAll(".review-item");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

function updateVisibility() {
  reviews.forEach((review, i) => {
    review.style.display = i === currentIndex ? "block" : "none";
  });
}

function nextImage() {
  currentIndex++;
  if (currentIndex > reviews.length - 1) {
    currentIndex = reviews.length - 1;
  }
  updateVisibility();
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  updateVisibility();
}

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Initially show the first review
updateVisibility();
