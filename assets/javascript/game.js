//Create possible computer guesses
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//computerChoices = ['a',];
//computer chooses a random choice from the letter array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//set the Wins counter to zero
var winsCounter = 0;
//set the losses counter to zero
var lossesCounter = 0;
//set maximum guesses per game
var guessMaximumTries = 9;
//set Guesses counter to maximum number of tries
var guessCounter = guessMaximumTries;
//set-up the guess array for the user
var guessArray = [];

confirm("To play the game press any letter a thru z")

document.getElementById("guessCount").innerHTML = "Guesses Left: " + guessMaximumTries;

document.onkeyup = function (event) {

    // Determine which key was pressed.
    var userGuess = event.key;


    if (userGuess.charCodeAt(0) >= 97 && userGuess.charCodeAt(0) <= 122) {



        //Add the user keypress to the guessArray
        guessArray.push(userGuess);

        //display user keypress to the screen
        document.getElementById("guesses").innerHTML = "Your Guesses so far: " + guessArray.join(' ');

        //Guesses Left (guessCounter) reduces by one
        guessCounter = guessCounter - 1;

        //number of Guesses Left is displayed on the screen
        document.getElementById("guessCount").innerHTML = "Guesses Left: " + guessCounter;

        //userGuess is compared to computerGuess
        if (userGuess == computerGuess) {
            //increase winsCounter by one
            winsCounter = winsCounter + 1;
            //displays the score on the winsCounter
            document.getElementById("wins").innerHTML = "Wins: " + winsCounter;
            //guessCounter resets back to guessMaximumTries
            guessCounter = guessMaximumTries;
            // display maximum tries as game is now reset
            document.getElementById("guessCount").innerHTML = "Guesses Left: " + guessMaximumTries;
            //guessArray resets
            guessArray = [];
            //new random computerGuess
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


        }
        else {
            //userGuess does not match computerGuess:
            //check that guessCounter is not equal to 0 


        } if (guessCounter == 0) {
            //increase loss by one
            lossesCounter = lossesCounter + 1;
            //display the score on the loss counter
            document.getElementById("losses").innerHTML = "Losses: " + lossesCounter;
            //reset guess left back to guessMaximumTries
            guessCounter = guessMaximumTries;
            //display maximum tries
            document.getElementById("guessCount").innerHTML = "Guesses Left: " + guessMaximumTries;
            //guess Array reset
            guessArray = [];
            //new random computerGuess is generated
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }




        // console.log('guess: ' + guessArray);
        // console.log('guess counter: ' + guessCounter);
        // console.log('wins: ' + winsCounter);
        // console.log('losses: ' + lossesCounter);



    }

};

// function displayGuesses() {

//     var g = document.getElementById("guesses");
//     guessArray.insertAdjacentElement("afterbegin", g)
// }