// Our Variables
var lettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winsNum = 0;
var lossesNum = 0;
var guessesLeftNum = 10;
var lettersGuessedArr = [];
var guessedLetter = null;
var winningLetter = lettersArr[Math.floor(Math.random() * lettersArr.length)];

// Creating a function as to make resetting the variables easier.
function reset() {
    guessesLeftNum = 10;
    lettersGuessedArr = [];
    winningLetter = lettersArr[Math.floor(Math.random() * lettersArr.length)];
}

// Creating a function which tells the websites keystrokes should be assigned to a guessedLetter variable.
document.onkeyup = function(event) {
    var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();
    
// Tell the website if the letter already exists or is not in the array to do nothing. Otherwise, reduce the number
// of guesses for the player.
    if (lettersGuessedArr.indexOf(guessedLetter) < 0 && lettersArr.indexOf(guessedLetter) >= 0) {
    lettersGuessedArr[lettersGuessedArr.length]=guessedLetter;
    guessesLeftNum--;
    }

// If you win, a pop-up will present an alert that says you win.
    if (winningLetter === guessedLetter) {
        alert("The letter was " + winningLetter + "! You Win! ");
        winsNum++;
        reset();
    }

// If you run out of guesses, present an alert that says you lose.
    if (guessesLeftNum === 0) {
        alert("You Lose! The letter was " + winningLetter + "!");
        lossesNum++;
        reset();
    }

// Put our variables into our HTML.
    $("#guesses-left").text("Guesses Left: " + guessesLeftNum);
    $("#wins").text("Wins: " + winsNum);
    $("#losses").text("Losses: " + lossesNum);
    $("#guesses-so-far").text("Your Guesses So Far: " + lettersGuessedArr.join(", "));
}