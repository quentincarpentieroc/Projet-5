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

// Mis en place des bullets points en bas du carroussel
for (let i = 0; i < slides.length; i++) {
  let newElement = document.createElement("div");
  newElement.classList.add("dot");
  document.querySelector(".dots").append(newElement);
}

//Déclaration des variables
const flecheGauche = document.getElementById("arrow_left");
const flecheDroite = document.getElementById("arrow_right");
const bulletPoint = document.querySelectorAll(".dot");
let position = 0;
const tailleSlides = slides.length;


//Mis en place des conditions attribué aux flèches: Si 
const slideGauche = () => {
  bulletPoint[position].classList.remove("dot_selected");//Gestion du bulletsPoints actif lorsqu'on est sur l'image active
  if (position === 0) {
    position = tailleSlides - 1;
  } else {
    position--;
  }
  document.querySelector("#banner-img").src = `../projet-5/assets/images/slideshow/${slides[position].image}`;
  document.querySelector("#banner-text").innerHTML = slides[position].tagLine;

  bulletPoint[position].classList.add("dot_selected");
};
const slideDroite = () => {
  bulletPoint[position].classList.remove("dot_selected");
  if (position === tailleSlides - 1) {
    position = 0;
  } else {
    position++;
  }
  document.querySelector("#banner-img").src = `../projet-5/assets/images/slideshow/${slides[position].image}`;
  document.querySelector("#banner-text").innerHTML = slides[position].tagLine;

  bulletPoint[position].classList.add("dot_selected");
};

//Mis en place de l'event lors du clique sur les flèches.
flecheGauche.addEventListener("click", slideGauche);
flecheDroite.addEventListener("click", slideDroite);
