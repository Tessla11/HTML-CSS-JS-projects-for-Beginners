let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
  }

  // Show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
  }

  // Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
  }