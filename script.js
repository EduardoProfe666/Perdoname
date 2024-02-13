"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    resizeNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  } else if (noCount === 13) noButton.style.display = "none";
});

function handleYesClick() {
  titleElement.innerHTML = "Siiiiii!!!! 😍😍😍";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.3;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function resizeNoButton() {
  const computedStyle = window.getComputedStyle(noButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));

  noButton.style.fontSize = `${fontSize * 0.9}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Estás segura?",
    "Por favorcito",
    "Perdóname chica anda",
    "No seas mala",
    "Yo no lo vuelvo a hacer...",
    "Discúlpame pls",
    "Anda mi amor perdóname",
    "No me hagas esto :(",
    "Me rompes el corazón",
    "Quiero llorar...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
