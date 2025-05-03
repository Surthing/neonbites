

let current = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Function to show current slide
function showSlide() {
  slides.forEach((s, i) => s.style.display = i === current ? 'block' : 'none');
}

// Initial display
showSlide();

// Next button click handler
nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide();
});

// Previous button click handler
prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide();
});