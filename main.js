document.addEventListener("DOMContentLoaded", function () {

  // Start auto-play on page load
  autoPlay();

  // Menu
  document.querySelector("#menu-hamburger").addEventListener("click",function(){
    document.body.classList.toggle("open");
  });

  // When scroll, close menu
  document.addEventListener("scroll", function () {
    document.body.classList.remove("open");
  });

   // When resize, close menu
  window.addEventListener("resize", function () {
    document.body.classList.remove("open");
  });

})

document.querySelectorAll("a").forEach((element) => {
  element.addEventListener("click", function () {
    console.log("clicked");
    document.body.classList.remove("open");
  });
});


const carouselSlides = document.querySelector(".carousel-slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const cardWidth = document.querySelector(".carousel-card").offsetWidth;
const numCards = document.querySelectorAll(".carousel-card").length;
let cardsPerSlide = 1; // Number of cards to display per slide
let currentIndex = 0;

function showSlide(index) {
  // Calculate the new position while considering looping
  let newPosition = -index * (cardWidth + 20); // 20px margin between cards

  // Handle looping for the "Next" button
  if (index >= numCards) {
    // If at or past the end, loop back to the first card and display to the right
    currentIndex = 0;
    newPosition = -currentIndex * (cardWidth + 20);
  }

  // Handle looping for the "Previous" button
  if (index < 0) {
    // If before the beginning, loop to the last card and display to the left
    currentIndex = numCards - cardsPerSlide;
    newPosition = -currentIndex * (cardWidth + 20);
  }

  carouselSlides.style.left = newPosition + "px";
}

prevBtn.addEventListener("click", () => {
  currentIndex -= cardsPerSlide;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex += cardsPerSlide;
  showSlide(currentIndex);
});

// Update the number of cards displayed per slide based on screen width
function updateCardsPerSlide() {
  if (window.innerWidth < 768) {
    cardsPerSlide = 2; // Display 2 cards on smaller screens
  } else {
    cardsPerSlide = 3; // Display 3 cards on larger screens
  }
  showSlide(currentIndex); // Show the current slide with the updated number of cards
}

// Add a listener to update the number of cards when the window is resized
window.addEventListener("resize", updateCardsPerSlide);

// Initial call to set the correct number of cards displayed on page load
updateCardsPerSlide();

// Auto-play the carousel
let autoPlayInterval;
const autoPlayDelay = 3000; // Adjust the delay as needed

function autoPlay() {
  autoPlayInterval = setInterval(() => {
    currentIndex += cardsPerSlide;
    showSlide(currentIndex);
  }, autoPlayDelay);
}

// Start auto-play on page load
autoPlay();

document.addEventListener("scroll", function () {
  document.body.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("resize", function () {
    // Code to handle window resizing
    document.body.classList.remove("open");
  });
});
