navToggle = document.querySelector(".menu-icon");
navMenu = document.querySelector(".nav-menu");
const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

faqItems = document.querySelectorAll(".tab");

faqItems.forEach((item) => {
  const question = item.querySelector(".tab-title");
  const answer = item.querySelector(".tab-content");

  question.addEventListener("click", () => {
    answer.classList.toggle("is-open");
  });
});
