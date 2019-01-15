//shortening the code
let $ = function (id) {
    return document.getElementById(id)
}

//global variables
const words = ["summer", "fall", "winter", "spring", "autumn"];
const images = ["C:\Users\SexyBoi\Desktop\Psychic-Game\assets\images\summer.jpg", "C:\Users\SexyBoi\Desktop\Psychic-Game\assets\images\fall-colors.jpg", "C:\Users\SexyBoi\Desktop\Psychic-Game\assets\images\winter.jpg", "C:\Users\SexyBoi\Desktop\Psychic-Game\assets\images\autumn.jpg", "C:\Users\SexyBoi\Desktop\Psychic-Game\assets\images\spring.jpg"];
let word;
const img = document.createElement("img")
const parent = $("img")
let answerArray = [];
let userGuess;
let rightGuess = false;
let userRightGuess = 0;
let left = 9;
let wins = 0;
let losses = 0;


//random word
function random() {
    let random = Math.floor(Math.random() * words.length);
    word = words[random]
    img.src = images[random]
}

//show blank start
function showBlank() {
    for (i = 0; i < word.length; i++) {
        answerArray[i] = "_"
    }
    $("guess").innerHTML = answerArray.join(" ")
}

//how many guesses left
function guessesLeft() {
    $("left").innerHTML = left
}

//wins
function winsScore() {
    $("wins").innerHTML = wins
}

//losses
function lossesScore() {
    $("losses").innerHTML = losses
}

//show wrong guesses
function wrongGuess(char) {
    $("wrong").innerHTML += char + ", "
}

// resent function
function initialGame() {
    if ($("winImage")) {
        $("winImage").remove()
    }

    left = 9;
    answerArray = [];
    $("wrong").innerHTML = "";
    userRightGuess = 0
    rightGuess = false;
    guessesLeft()
    random()
    showBlank()
}

// call initial function
initialGame()
winsScore()
lossesScore()

//check letters
function showLetter(char, str) {
    for (let j = 0; j < str.length; j++) {
        if (char === str[j]) {
            rightGuess = true
            answerArray.splice(j,1,char)
            userRightGuess++
        }
    }
    $("guess").innerHTML = answerArray.join(" ")
}

//check length 
let matchLength = function() {
    if (word.length === userRightGuess) return true
    else return false
}

//user guess and added audio
document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();

    showLetter(userGuess, word)
    
    if (rightGuess) {
        rightGuess = false
        if (matchLength()) {
            let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3');
            audio.play()
            img.setAttribute("id","winImage")
            parent.appendChild(img)
            wins++
            winsScore()
            setTimeout(initialGame, 2000)
        } else {
            let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3');
            audio.play()
        }
    } else {
        left--
        if (left < 1) {
            let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3');
            audio.play()
            initialGame()
            losses++
            lossesScore()
        } else {
            let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3');
            audio.play()
            wrongGuess(userGuess)
            guessesLeft()
        }

    }
}