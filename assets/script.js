// Tableau comprenant les photos du caroussel

const slides = [
  {
    image: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variables globales

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p ");
const dots = document.querySelector(".dots");
let currentSlide = 0;

// Cette fonction comprend : la source de l'image et le texte du tableau slides

function currentBanner() {
  bannerImg.src = slides[currentSlide].image;
  bannerText.innerHTML = slides[currentSlide].tagLine;
}

// Fonction reprenant les dots , la fonction comprend une boucle qui créer une div avec une class "dot" en fonction du nombre d'éléments du tableau slides. Si currentSlide est égale à i (ici 0 = 0) alors la classe dot_selected s'ajoute

function dotsContainer() {
  for (let i = 0; i < slides.length; i++) {
    const divDot = document.createElement("div");
    divDot.classList.add("dot");
    dots.appendChild(divDot);

    if (currentSlide === i) {
      divDot.classList.add("dot_selected");
    }
  }
}
dotsContainer();
currentBanner();

const dot = document.querySelectorAll(".dot");

function changeSlide(nextSlide) {
  dot[currentSlide].classList.remove("dot_selected");
  if (nextSlide < 0) {
    nextSlide = slides.length - 1;
  }
  if (nextSlide > slides.length - 1) {
    nextSlide = 0;
  }
  dot[nextSlide].classList.add("dot_selected");
  currentSlide = nextSlide;
  currentBanner();
}

// Flèche gauche

const arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

// Fleche droite

const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});

//dots quand on clique dessus, met le slide correspondant au dot

dot.forEach((bulletpoint, index) => {
  bulletpoint.addEventListener("click", function () {
    changeSlide(index);
  });
});
