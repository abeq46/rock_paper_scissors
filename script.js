
function playGame() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getComputerChoice() {
        let choice = getRandomInt(3);
        let choiceWord = null;
        if (choice == 0) {
            choiceWord = "rock";
            return choiceWord;
        } else if (choice == 1) {
            choiceWord = "paper";
            return choiceWord;
        } else if (choice == 2) {
            choiceWord = "scissors";
            return choiceWord;
        } else {
            throw TypeError;
        }

    }

    let computerChoice = getComputerChoice();

    function getHumanChoice() {

        let playerChoice = prompt("Please make your selection, rock, paper, or scissors", '');

        if (playerChoice.localeCompare("rock", "en", { sensitivity: "base" }) == 0) {
            playerChoice = "rock";
            return playerChoice;
        } else if (playerChoice.localeCompare("paper", "en", { sensitivity: "base" }) == 0) {
            playerChoice = "paper";
            return playerChoice;
        } else if (playerChoice.localeCompare("scissors", "en", { sensitivity: "base" }) == 0) {
            playerChoice = "scissors";
            return playerChoice;
        } else {
            throw console.error("Invalid player choice");
        }
    }


    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        console.log(humanChoice);
        console.log(computerChoice);
        let winner = null;

        if (humanChoice == computerChoice) {
            console.log("The match is a draw");
        } else if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                console.log("computer takes round paper covers rock");
                computerScore++;
                winner = "computer";
            } else if (computerChoice == "scissors") {
                console.log("human takes round rock smashes scissors");
                humanScore++;
                winner = "human";
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("human takes round paper covers rock");
                humanScore++;
                winner = "human";
            } else if (computerChoice == "scissors") {
                console.log("computer takes round scissors cuts paper");
                computerScore++;
                winner = "computer";
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                console.log("computer takes round rock smashes scissors");
                computerScore++;
                winner = "computer";
            } else if (computerChoice == "paper") {
                console.log("human takes round scissors cut paper");
                humanScore++;
                winner = "human";
            }
        }
        console.log(`The current score is player: ${humanScore} to computer: ${computerScore} `)
        return winner;
    }

    for (i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        let winner = playRound(humanSelection, computerSelection);

    }

    if (humanScore > computerScore) {
        console.log(`Player wins! with a score of ${humanScore}`);

    } else if (computerScore > humanScore) {
        console.log(`Computer wins! with a score of  ${computerScore}`);

    }
}

playGame();