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
function showImageOverlay() {
  alert();
}
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
    if (rect.top <= window.innerHeight - (window.innerHeight - 1)) {
      currentSection = section;
      break;
    }
  }

  if (currentSection) {
    const logoDiv = currentSection.querySelector("div");
    if (logoDiv) {
      const logoClass = logoDiv.classList.contains("unccd-logo-white")
        ? "logos/unccd-white.svg"
        : "logos/unccd-black.svg";
      const newLogoSrc = logoClass;

      logoImg.src = newLogoSrc;
    }
  }
});

function closeOverlay() {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.parentNode.removeChild(overlay);
  }
}

function showVideoOverlay(videoShortcode) {
  const body = document.getElementsByTagName("body")[0];
  const overlay = document.createElement("div");
  const emptyDiv = document.createElement("div");
  const contentDiv = document.createElement("div");
  const closeIcon = document.createElement("img");
  const iframe = document.createElement("iframe");
  overlay.className = "overlay grid grid-cols-12";
  contentDiv.className = "col-span-10 self-center";
  closeIcon.src = "icons/x.svg";
  closeIcon.className = "overlay-close center mt-10 ml-10";
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "100%");
  iframe.src = `https://www.youtube.com/embed/${videoShortcode}`;
  iframe.allowFullscreen = true;
  closeIcon.onclick = closeOverlay;

  overlay.appendChild(emptyDiv);
  overlay.appendChild(contentDiv);
  overlay.appendChild(closeIcon);
  contentDiv.appendChild(iframe);

  body.appendChild(overlay);
}

///image overlay
const overlayCarouselData = [
  {
    id: 1,
    name: "Aiyana",
    location: "Alaska, USA",
    title: "For her land she provides, and in return, she's provided for.",
    description:
      "They are both nourished, intertwined, a tapestry old as time. Her land is her right, because her land is her life.",
    imgPath: "portraits/0-Aiyana-_-USA-(Alaska)_web.jpg",
  },
  {
    id: 2,
    name: "Habiba",
    location: "Niger",
    title: "For her land she provides, and in return, she's provided for.",
    description:
      "They are both nourished, intertwined, a tapestry old as time. Her land is her right, because her land is her life.",
    imgPath: "portraits/0-Habiba-_-Niger_web.jpg",
  },
  {
    id: 2,
    name: "Iris",
    location: "Artctic",
    title: "For her land she provides, and in return, she's provided for.",
    description:
      "They are both nourished, intertwined, a tapestry old as time. Her land is her right, because her land is her life.",
    imgPath: "portraits/Iris-_-Arctic_web.jpg",
  },
];
function prevImgOverlaySlide(imageIndex) {
  if (imageIndex >= 0) {
    showImageOverlay(--imageIndex);
    closeOverlay();
  }
}
function nextImgOverlaySlide(imageIndex) {
  if (imageIndex <= overlayCarouselData.length) {
    showImageOverlay(++imageIndex);
    closeOverlay();
  }
}
function showImageOverlay(imageIndex) {
  const overlayDiv = document.createElement("div");
  overlayDiv.className = "overlay slide-content flex flex-col justify-center";

  const closeButtonDiv = document.createElement("div");
  closeButtonDiv.className = "self-end";
  const closeButtonImg = document.createElement("img");
  closeButtonImg.src = "icons/x.svg";
  closeButtonImg.className = "overlay-close";
  closeButtonImg.onclick = closeOverlay;
  closeButtonDiv.appendChild(closeButtonImg);

  const titleDiv = document.createElement("div");
  const titleH2 = document.createElement("h2");
  titleH2.className = "text-4xl mb-10";
  titleH2.innerHTML = `${overlayCarouselData[imageIndex].name} <span class="text-gray-500">${overlayCarouselData[imageIndex].location}</span>`;
  titleDiv.appendChild(titleH2);

  const gridDiv = document.createElement("div");
  gridDiv.className = "grid grid-cols-12 content-center gap-12";

  const imageDiv = document.createElement("div");
  imageDiv.className = "col-span-9";
  const image = document.createElement("img");
  image.src = overlayCarouselData[imageIndex].imgPath;
  imageDiv.appendChild(image);

  const textDiv = document.createElement("div");
  textDiv.className = "col-span-2 flex flex-col justify-between";

  const textContentDiv = document.createElement("div");
  const boldParagraph = document.createElement("p");
  boldParagraph.className = "font-bold mb-8";
  boldParagraph.textContent = overlayCarouselData[imageIndex].title;
  const regularParagraph = document.createElement("p");
  regularParagraph.textContent = overlayCarouselData[imageIndex].description;
  textContentDiv.appendChild(boldParagraph);
  textContentDiv.appendChild(regularParagraph);

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "flex gap-10";
  const prevButton = document.createElement("button");
  prevButton.id = "prevBtnImg";
  prevButton.onclick = () => prevImgOverlaySlide(imageIndex);
  const prevButtonImg = document.createElement("img");
  prevButtonImg.src = "icons/arrow-left.svg";
  imageIndex === 0
    ? (prevButtonImg.className = "overlay-arrow-disabled icon-white")
    : (prevButtonImg.className = "overlay-arrow icon-white");
  prevButton.appendChild(prevButtonImg);
  const nextButton = document.createElement("button");
  nextButton.id = "nextBtnImg";
  nextButton.onclick = () => nextImgOverlaySlide(imageIndex);
  const nextButtonImg = document.createElement("img");
  nextButtonImg.src = "icons/arrow-right.svg";
  imageIndex === overlayCarouselData.length - 1
    ? (nextButtonImg.className = "overlay-arrow-disabled icon-white")
    : (nextButtonImg.className = "overlay-arrow icon-white");
  nextButton.appendChild(nextButtonImg);
  buttonDiv.appendChild(prevButton);
  buttonDiv.appendChild(nextButton);

  textDiv.appendChild(textContentDiv);
  textDiv.appendChild(buttonDiv);

  gridDiv.appendChild(imageDiv);
  gridDiv.appendChild(textDiv);

  overlayDiv.appendChild(closeButtonDiv);
  overlayDiv.appendChild(titleDiv);
  overlayDiv.appendChild(gridDiv);

  document.body.appendChild(overlayDiv);
}
