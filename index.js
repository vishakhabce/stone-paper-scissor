// vraibles

var userScore = 0;
var computerScore = 0;
var userSelect;
var computerSelect;
const options = ["stone", "paper", "scissor"];
var cs = document.querySelector("#computer-score");
var us = document.querySelector("#user-score");

// fetch from local storage
(function () {
  if (localStorage.getItem("userScore") == null) {
    localStorage.setItem("userScore", userScore);
  } else {
    userScore = parseInt(localStorage.getItem("userScore"));
    us.innerHTML = userScore;
  }

  if (localStorage.getItem("computerScore") == null) {
    localStorage.setItem("computerScore", computerScore);
  } else {
    computerScore = parseInt(localStorage.getItem("computerScore"));
    cs.innerHTML = computerScore;
  }
})();


// winner selection

function selectWinner(player, computer) {
  const p1Index = options.indexOf(player.toLowerCase());
  const p2Index = options.indexOf(computer.toLowerCase());

  if (p1Index === p2Index) {
    return "TIE UP";
  } else if (
    (p1Index === 0 && p2Index === 2) ||
    (p1Index === 1 && p2Index === 0) ||
    (p1Index === 2 && p2Index === 1)
  ) {
    userScore = userScore + 1;
    us.innerHTML = userScore;
    return "YOU WIN AGAINST PC";
  } else {
    computerScore = computerScore + 1;
    cs.innerHTML = computerScore;
    return "YOU LOST AGAINST PC";
  }
}


// computer selection

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

// user selection

function stoneSelect() {
  userSelect = "stone";
  computerSelect = computerPlay();
  Update(userSelect, computerSelect);
}

function scissorSelect() {
  userSelect = "scissor";
  computerSelect = computerPlay();
  Update(userSelect, computerSelect);
}

function paperSelect() {
  userSelect = "paper";
  computerSelect = computerPlay();
  Update(userSelect, computerSelect);
}

// result Update

function Update(userSelect, computerSelect) {
    
  document.querySelector(".result").innerHTML = selectWinner(
    userSelect,
    computerSelect
  );
  document.querySelector(".user-choice").setAttribute("id", userSelect);
  document.querySelector(
    ".user-choice"
  ).children[1].src = `./assets/${userSelect}.png`;
  document.querySelector(".computer-choice").setAttribute("id", computerSelect);
  document.querySelector(
    ".computer-choice"
  ).children[1].src = `./assets/${computerSelect}.png`;
  document.querySelector(".select-container").classList.add("hide");
  document.querySelector(".result-container").classList.remove("hide");
  localStorage.setItem("userScore", userScore);
  localStorage.setItem("computerScore", computerScore);

}

// play again

function playAgain() {
  document.querySelector(".select-container").classList.remove("hide");
  document.querySelector(".result-container").classList.add("hide");
}

// rules

const closeRule = () => {
  document.querySelector(".close").classList.add("hide");
  document.querySelector(".rule-container").classList.add("hide");
};

const displayRule = () => {
  document.querySelector(".close").classList.remove("hide");
  document.querySelector(".rule-container").classList.remove("hide");
};
