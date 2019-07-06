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



document.onkeyup = function (event) {

    // Determine which key was pressed.
    var userGuess = event.key;

    //Add the user keypress to the guessArray
    guessArray.push(userGuess);

    //guessCounter reduces by one
    guessCounter = guessCounter - 1;

    //userGuess is compared to computerGuess
    if (userGuess == computerGuess) {
        //increase winsCounter by one
        winsCounter = winsCounter + 1;
        //guessCounter resets back to guessMaximumTries
        guessCounter = guessMaximumTries;
        //guessArray resets 
        guessArray = [];
        //new random computerGuess
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    }
    else {
        //userGuess does not match computerGuess:
        //check that guessCounter is not equal to 0 


    } if (guessCounter == 0) {
        lossesCounter = lossesCounter + 1;
        guessCounter = guessMaximumTries;
        guessArray = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    console.log('guess: ' + guessArray);
    console.log('guess counter: ' + guessCounter);
    console.log('wins: ' + winsCounter);
    console.log('losses: ' + lossesCounter);





};