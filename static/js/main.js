document.addEventListener("DOMContentLoaded", () => {
  const _window = window;
  const panels = document.querySelectorAll(".panel");
  const panelsY = [];

  // Cache position of each panel
  panels.forEach((el) => {
    panelsY.push(el.getBoundingClientRect().top + window.scrollY);
  });

  // Bind our function to window scroll
  _window.addEventListener("scroll", updateWindow);

  // Update the window
  function updateWindow() {
    const y = _window.scrollY;

    // Loop through our panel positions
    let i = 0;
    const l = panels.length;
    while (i < l - 1 && (y < panelsY[i] || y > panelsY[i + 1])) {
      i++;
    }

    // Update classes
    panels.forEach((panel, index) => {
      panel.classList.toggle("panel-fixed", index === i);
    });
  }
});

//carousel logic
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const slide = carousel.querySelector(".carousel-item");
const slideWidth = slide.offsetWidth + 8; // Considering gap
const maxSlide = carousel.children.length - 1;

let currentSlide = 0;

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < maxSlide - 2) {
    currentSlide++;
    updateCarousel();
  }
});

function updateCarousel() {
  const translateValue = -currentSlide * slideWidth;
  carousel.style.transform = `translateX(${translateValue}px)`;

  // Add/Remove disabled class for buttons based on current slide
  if (currentSlide === 0) {
    prevBtn.classList.add("carousel-arrow-disabled");
  } else {
    prevBtn.classList.remove("carousel-arrow-disabled");
  }

  if (currentSlide === maxSlide - 2) {
    nextBtn.classList.add("carousel-arrow-disabled");
  } else {
    nextBtn.classList.remove("carousel-arrow-disabled");
  }
}

// Initialize the carousel position
updateCarousel();

// scroll logic to change logo
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const logoImg = document.querySelector("#unccd-logo");
   
  let currentSection = null;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const rect = section.getBoundingClientRect();
    console.log(rect)
    if (rect.top <= window.innerHeight - (window.innerHeight-1)) {
      currentSection = section;
      break;
    }
  }

  if (currentSection) {
    const logoDiv = currentSection.querySelector("div");
    console.log(logoDiv.classList.contains('unccd-logo-white'));
    if (logoDiv) {
      const logoClass = logoDiv.classList.contains("unccd-logo-white")
        ? "logos/unccd-white.svg"
        : "logos/unccd-black.svg";
      const newLogoSrc = logoClass;

      logoImg.src = newLogoSrc;
    }
  }
});
