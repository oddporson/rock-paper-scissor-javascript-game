const game = function(){
    let pScore = 0;
    let cScore = 0;

    //Start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        /* 
        Every time we literally click on the "lets play", we are going to run something 
        () => apparently means functions? 
        */
        playBtn.addEventListener("click", () => { 
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn"); // the match class fades in after user click the "let's play" button. 
        });
    };
    //Play Match
    const playGame = () => {
        const options = document.querySelectorAll(".options button"); // queryselectorall selects all that's inside the option div class
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        /* 
        Computer Options inside const playMatch
        We need to give computer options
        We just generate a random number between 0 1 & 2 and
        we're going to associate the different numbers to a symbol like rock, paper and scissors. to like an image instead.
        How are we going to generate a random number?
        We can use math.random
        */

        // Computer options
        const computerOptions = ["rock", "paper", "scissors"];                                   
    
        options.forEach(option => {
            option.addEventListener("click", function() {
            //Computer Choice
            const computerNumber = Math.floor(Math.random() * 3); 
            /* 
            Why? because math or random is going to generate a random number between 0 and 1
            That means, if we times this by 3, it's going to multipy everything. the results shows 2.5566, 0.85342, etc after you console.log(computerNumber)
            So, rap the parenthesis and add math.floor afterward. 
            what that does is take all the numbers and convert it into 1 single digit without the dots. 
            So it will generate in 1, 0 or 2.
            */
            const computerChoice = computerOptions[computerNumber];

            //Here is where we call compare hand
            compareHands(this.textContent, computerChoice);

            //Update Images
            playerHand.src = `./images/${this.textContent}.png`;
            computerHand.src = `./images/${computerChoice}.png`;

            });
        });
    };
/*
    We do this after customers given the choice to generate random numbers which are rock, paper, or scissors
    We going to check who wins and keeps the score check
*/

const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore; 
};

    const compareHands = (playerChoice, computerChoice) => {
        //Update text
        const winner = document.querySelector(".winner");
        // THIS IS WHERE WE THINK LOGICALLY and like a computer

        // Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie!"; //don't confuse with inner.HTML
            return; // this will return and ends the function after playerChoice is equal to computerChoice
        }

        //Check for Rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins!";
        /* 
        What's happening here?
        We have rock, so if rock is true, then we're going to get this if statement of computerChoice.
        If the computerChoice has scissors, then we win. 
        What is the other alternative?
        Well, we do "OR ELSE". if the computer has paper, the computer wins here like so below
        */
                pScore++; 
                updateScore();
                return; // returns if player wins 
            } else {
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return; // returns if computer wins
            }
        }

        //Check for Paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors"){
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return; 
            } else {
            winner.textContent = "Player Wins!";
                pScore++;
                updateScore();
                return; 
            }
        }

        //Check for Scissor
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return; 
              } else {
            winner.textContent = "Player Wins!";
               pScore++;
               updateScore();
              return; 
            }
        }
    };

    //is call all the inner function
    startGame();
    playGame();
};

//Start the game function
game();
