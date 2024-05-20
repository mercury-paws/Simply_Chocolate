const modal = document.querySelector(".backdrop-leave-comment-overlay");
const leaveReviewBtn = document.querySelector(".review-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const mobileMenu = document.querySelector(".backdrop-mobile-menu");
const mobileMenuCloseBtn = document.querySelector(".close-icon-button");
const burgerBtn = document.querySelector(".burger-button");

leaveReviewBtn.addEventListener("click", () => {
  modal.classList.toggle("is-open");
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.toggle("is-open");
});

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-open");
});

mobileMenuCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-open");
});
