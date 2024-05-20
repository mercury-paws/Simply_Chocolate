const modal = document.querySelector(".backdrop-leave-comment-overlay");
const leaveReviewBtn = document.querySelector(".review-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");

leaveReviewBtn.addEventListener("click", () => {
  modal.classList.toggle("is-open");
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.toggle("is-open");
});
