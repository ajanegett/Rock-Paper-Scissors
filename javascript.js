let userScore = 0;
let computerScore = 0;
let results = document.querySelector(".results");
let userScoreDiv = document.querySelector(".userscore");
let compScoreDiv = document.querySelector(".computerscore");
let resetButton = document.querySelector(".reset");
let userChoosed = document.querySelector(".userChoosed");
let computerChoosed = document.querySelector(".computerChoosed");

userScoreDiv.textContent = userScore;
compScoreDiv.textContent = computerScore;

function getComputerChoice() {
  //return rock, paper scissors
  a = Math.random() * 3;
  const randomInt = Math.ceil(a);
  switch (randomInt) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      console.error("Switch statement error");
      break;
  }
}
function capitalize(x) {
  newArray = x.split("");
  newArray[0] = newArray[0].toUpperCase();
  return newArray.join("");
}

function evaluateChoice(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "win";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "win";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "win";
  } else if (playerSelection === computerSelection) {
    return "draw";
  } else {
    return "lose";
  }
}

function printChoosed(usr, comp) {
  switch (capitalize(usr)) {
    case "Rock":
      userChoosed.textContent = "🪨";
      break;

    case "Scissors":
      userChoosed.textContent = "✂️";
      break;

    case "Paper":
      userChoosed.textContent = "📃";

    default:
      break;
  }

  switch (capitalize(comp)) {
    case "Rock":
      computerChoosed.textContent = "🪨";
      break;

    case "Scissors":
      computerChoosed.textContent = "✂️";
      break;

    case "Paper":
      computerChoosed.textContent = "📃";

    default:
      break;
  }
}

function playRound(UserInput) {
  let ComputerOutput = getComputerChoice();
  printChoosed(UserInput, ComputerOutput)
  switch (evaluateChoice(UserInput, ComputerOutput)) {
    case "win":
      userScore += 1;

      results.textContent = `You win! ${capitalize(
        UserInput
      )} beats ${capitalize(ComputerOutput)}`;
      break;

    case "lose":
      computerScore += 1;
      results.textContent = `You lose! ${capitalize(
        UserInput
      )} gets beaten by ${capitalize(ComputerOutput)}`;
      break;

    default:
      results.textContent = `Draw. ${capitalize(UserInput)} and ${capitalize(
        ComputerOutput
      )}`;
      break;
  }
  if (userScore === 5) {
    btnList.forEach((btn) => btn.removeEventListener("click", excetuer));
    results.textContent = "You win the game!";
  }
  if (computerScore === 5) {
    btnList.forEach((btn) => btn.removeEventListener("click", excetuer));
    results.textContent = "Computer wins the game!";
  }
  userScoreDiv.textContent = userScore;
  compScoreDiv.textContent = computerScore;
}

function excetuer(e)  { //Callback function for buttons
  playRound(e.target.textContent);
}

let btnList = document.querySelectorAll(".btn");
btnList.forEach((btn) => {
  btn.addEventListener("click", excetuer);
});

resetButton.addEventListener("click", function () {
  userScore = 0;
  computerScore = 0;
  userScoreDiv.textContent = userScore;
  compScoreDiv.textContent = computerScore;
  results.textContent = "resetted";
  userChoosed.textContent = "";
  computerChoosed.textContent = "";
  btnList.forEach((btn) => {
    btn.addEventListener("click", excetuer);
  });
});