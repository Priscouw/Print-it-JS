// Flèches gauche et droite sur la bannière, message s'affiche dans la console au clic de chaque flèche

let arrowLeft = document.querySelector("#banner .arrow_left");

arrowLeft.addEventListener("click", () => {
  console.log("Vous avez cliqué sur la flèche gauche");
});

let arrowRight = document.querySelector("#banner .arrow_right");

arrowRight.addEventListener("click", () => {
  console.log("Vous avez cliqué sur la flèche droite");
});

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
