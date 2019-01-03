// Variables
var lettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winsNum = 0;
var lossesNum = 0;
var guessesLeftNum = 10;
var lettersGuessedArr = [];
var guessedLetter = null;
var winningLetter = lettersArr[Math.floor(Math.random() * lettersArr.length)];

// Creating a function to make resetting some variables easier.
function reset() {
    guessesLeftNum = 10;
    lettersGuessedArr = [];
    winningLetter = lettersArr[Math.floor(Math.random() * lettersArr.length)];
}

// Creating a function telling the computer keystroke should be assigned to the guessedLetter variable.
document.onkeyup = function(event) {
    var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();
    
// Tell the computer if the letter already exists or is not in the array, do nothing. Otherwise, reduce the number
// of guesses. Not going to lie, I had to look this up...
    if (lettersGuessedArr.indexOf(guessedLetter) < 0 && lettersArr.indexOf(guessedLetter) >= 0) {
    lettersGuessedArr[lettersGuessedArr.length]=guessedLetter;
    guessesLeftNum--;
    }

// If you win, show an alert that says you win.
    if (winningLetter === guessedLetter) {
        alert("The letter was " + winningLetter + "! You Win! :D");
        winsNum++;
        reset();
    }

// If you run out of guesses, show an alert that says you lose.
    if (guessesLeftNum === 0) {
        alert("You Lose! D: The letter was " + winningLetter + "!");
        lossesNum++;
        reset();
    }

// Put our variables into our HTML to show in the DOM.
    $("#guesses-left").text("Guesses Left: " + guessesLeftNum);
    $("#wins").text("Wins: " + winsNum);
    $("#losses").text("Losses: " + lossesNum);
    $("#guesses-so-far").text("Your Guesses So Far: " + lettersGuessedArr.join(", "));
}