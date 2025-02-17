"use strict";
let inpOfGuess = document.querySelector(".guess");
let checkBtn = document.querySelector(".btn-checker");
let message = document.querySelector(".message");
let number = document.querySelector(".number");
let score = document.querySelector(".score");
let resetbtn = document.querySelector(".reset-btn")

function gamer(e) {
  e.preventDefault();
  let randomNumGen = Math.ceil(Math.random() * 6);
  let body = document.body.style;
  console.log(randomNumGen);

  if (!inpOfGuess.value) {
    message.textContent = "input field must not be empty";
  } else if (inpOfGuess.value > randomNumGen) {
    message.textContent = "you guessed higher 🙂";
    number.textContent = randomNumGen;
    score.textContent--;
    body.backgroundColor = "blue";
  } else if (inpOfGuess.value < randomNumGen) {
    message.textContent = "you guessed lower 🙂";
    number.textContent = randomNumGen;
    score.textContent--;
    body.backgroundColor = "purple";
  } else if (Number(inpOfGuess.value) === randomNumGen) {
     message.textContent = "you guessed right 👍 ";
     number.textContent = randomNumGen;
     body.backgroundColor = "Green";
  }

  if(score.textContent < 1){
    checkBtn.setAttribute("disabled", "disabled");
    message.textContent = "Game over, restart 🔄 ";
    checkBtn.style.backgroundColor = "grey-600";
    checkBtn.style.cursor = "no-drop";
    body.backgroundColor = "grey"
    number.textContent = "?";
    inpOfGuess.value = ""

  }
}

checkBtn.addEventListener("click", gamer);


function resetgame (){

location.reload();

}
 resetbtn.addEventListener("click", resetgame)


