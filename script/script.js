

const totalScore = {computerScore: 0, playerScore:0}


const getComputerChoice = () => {
  let RPS = ["Rock", "Paper", "Scissors"]
  let randomChoice = Math.floor(Math.random() * RPS.length);

  return RPS[randomChoice]
}


function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score
  
  if ( playerChoice == computerChoice ) {
    score = 0
  }

  else if ( playerChoice == "Rock" && computerChoice == "Scissors" ) {
    score = 1
  }
  else if ( playerChoice == "Paper" && computerChoice == "Rock" ) {
    score = 1
  }
  else if ( playerChoice == "Scissors" && computerChoice == "Paper" ) {
    score = 1
  }

  else{
    score= -1
  }

  // return score
  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands")
  let result = document.getElementById("result")


  playerScore.innerText = `Your Score: ${totalScore["playerScore"]} `
  hands.innerText = `👦 ${playerChoice} VS 🤖 ${computerChoice}`

  if ( score == 1 ) {
    result.innerText = "You Win! 😄"
  }
  else if ( score == -1 ) {
    result.innerText = "You Lose! 😔"
  }
  else{
    result.innerText = "It's a Draw 🙃"
  }
 
}


// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  

  totalScore["playerScore"] += score
  totalScore["computerScore"] += score
   
  showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  let RPSbuttons = document.querySelectorAll(".rpsButton");
  RPSbuttons[0].onclick = () => console.log(RPSbuttons[0].value);
  RPSbuttons.forEach (RPSbuttons => {
    RPSbuttons.onclick = () => onClickRPS(RPSbuttons.value)
  })
 
  const endGameButton = document.getElementById("endGameButton")
  endGameButton.onclick = () => endGame(totalScore)
}

function endGame(totalScore) {
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands")
  let result = document.getElementById("result")
  

  playerScore.innerText = ""
  hands.innerText = ""
  result.innerText = ""
  totalScore["playerScore"] = 0
  totalScore["computerScore"] = 0
}

playGame()