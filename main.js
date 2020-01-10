const computerChoices = ["rock" , "paper" , "scissors"];

const btns = document.querySelectorAll('button');
btns.forEach(button => {
    button.addEventListener('click' , playRound);
});
    
const resultsDisplay = document.createElement("div");

const body = document.querySelector("body");
body.appendChild(resultsDisplay);

const playerScore = document.createElement("p");
resultsDisplay.appendChild(playerScore);
        
const computerScore = document.createElement("p");
resultsDisplay.appendChild(computerScore);

let playerCurrentPoints = 0 ;
let computerCurrentPoints = 0;
    
function playRound(e)
{
    const playerSelection = e.target.textContent.toLowerCase();
    const computerSelection = computerPlay();

    if(playerSelection === computerSelection)
    {
        result = "It's a draw!";
        declareCurrentResult(result);
    }
    else if(playerSelection === 'rock' && computerSelection == 'scissors' || 
            playerSelection === 'paper' && computerSelection === 'rock' || 
            playerSelection === 'scissors' && computerSelection === 'paper')
        {
            result = "You win! ";
            playerCurrentPoints++;
            declareCurrentResult(result , playerSelection , computerSelection);
        }
    else
    {
        result = "You lose! ";
        computerCurrentPoints++;
        declareCurrentResult(result , computerSelection , playerSelection);
    }
    playerScore.textContent = "Player Score is " + playerCurrentPoints;
    computerScore.textContent = "Computer Score is " + computerCurrentPoints;

    if(playerCurrentPoints === 5)
    {
        let playerWon = true;
        declareFinalResult(playerWon);
    }
    else if(computerCurrentPoints === 5)
    {
        let playerWon = false;
        declareFinalResult(playerWon);
    }
}

function computerPlay()
{
    let computersChoice = computerChoices[randomInt()- 1];
    return computersChoice;
}

function randomInt()
{
    return Math.floor(Math.random() * 3) + 1;
}

function declareCurrentResult(result , winningChoice , losingChoice)
{
    if(result!=="It's a draw!")
    console.log(result + winningChoice.charAt(0).toUpperCase() + winningChoice.slice(1) 
    + " beats " + losingChoice.charAt(0).toUpperCase() + losingChoice.slice(1)+"!");
    else
        console.log(result);
}

function declareFinalResult(playerWon)
{
    const results = document.createElement("div");
    resultsDisplay.appendChild(results);
    if(playerWon)
        results.textContent = "YAY YOU WON";
    else
        results.textContent = "You honestly thought you could defeat the computer? Think again kiddo";
}
