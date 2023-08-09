"use strict";

const againButton = document.querySelector(".again");
const numberEl = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const bodyEl = document.body;
let score = 20;
let highscore = 0;
var secretNumber = 0;

function randomSecret() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  numberEl.textContent = secretNumber;
}
function changeBodyColor(color) {
  bodyEl.style.backgroundColor = color;
}
window.addEventListener("load", (event) => Again());
function Again(){
    randomSecret();
    score = 20;
    highscore = 0;
    scoreEl.textContent = score;
    highScoreEl.textContent = highscore;
}
checkButton.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);
  if (!guess) return (messageEl.textContent = "No Number");
  if (score === 0) return (messageEl.textContent = "თქვენ წააგეთ");

  if (guess < secretNumber) {
    messageEl.textContent = "ნაკლებია ჩაფიქრებული რიცხვზე";
    score--;
    scoreEl.textContent = score;
    changeBodyColor("#222");

  } else if (guess > secretNumber) {
    messageEl.textContent = "მეტია ჩაფიქრებული რიცხვზე";
    score--;
    scoreEl.textContent = score;
    changeBodyColor("#222");
  } else {
    messageEl.textContent = "თქვენ გამოიცანით ჩაფიქრებული რიცხვი";
    score += 5;
    scoreEl.textContent = score;
    changeBodyColor("green");
    randomSecret();
    
  }
});
againButton.addEventListener("click", () => {
    Again();
    changeBodyColor("#222");
})