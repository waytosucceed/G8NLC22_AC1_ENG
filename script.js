
const numSlides =18; // Total number of slides

// Function to create image elements dynamically
function createImageElements() {
  const slidesContainer = document.getElementById('slidesContainer');

  for (let i = 1; i <= numSlides; i++) {
    const img = document.createElement('img');
    img.src = `${i}.png`;
    img.alt = `Slide ${i}`;
    slidesContainer.appendChild(img);
  }
}

// Function to control slideshow navigation
let slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Function to play the kids cheer sound
// function playKidsCheer() {
//   const audio = new Audio('kids-cheer.mp3');
//   audio.play();
// }

function showSlides(n) {
  const slides = document.querySelectorAll('.slides img');

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }

  // Hide all slides
  slides.forEach(slide => slide.style.display = 'none');

  // Display the current slide
  slides[slideIndex].style.display = 'block';

    // Check if it's the last slide
    // if (slideIndex === slides.length - 1) {
    //   playKidsCheer();
    // }
}

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
  createImageElements();
  showSlides(slideIndex);
});
