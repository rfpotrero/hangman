// Arrays to store the name of the callenges.
const SOURCE_MOVIES = ["TERMINATOR", "ALIENS", "SICARIO", "EXMACHINA", "MALEFICENT", "INTERSTELLAR", "DIVERGENT", "HERCULES", "ROBOCOP", "BIRDMAN", "RUSH", "BRAVEHEART"];
const SOURCE_COMICS = ["BATMAN", "SUPERMAN", "LUCIFER", "WOLVERINE", "DAREDEVIL", "HELLBLAZER", "HELLBOY", "SAGA", "AVENGERS", "SLAINE"];
const HANGMAN_STEPS = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];

// Globlal variables.
let challengeTitleLetter = [];
let livesNumber = 0;
let hangmanParts = 9;


/** Main function to run the game. 
 * This is invoked after the page loads and the user selects the source for the game. 
 * @param {string} sourceType innerHTML of the selection button.
 */
function newGame(sourceType) {
    // The below block re-Style the page after the user selection.
    document.querySelectorAll('.selection').forEach(function (hide) {
        hide.style.display = "none";
    });
    document.querySelector('.box-graphic').style.height = "30em";
    document.querySelector('.box-graphic').style.width = "25em";

    livesNumber = 10;
    hangmanParts = 0;
    document.getElementById("number-lives").innerHTML = `<span>${livesNumber} lives left</span>`;

    document.getElementById("draw-graphic").innerHTML = '<img style="height:100%;width:100%;" src="assets/images/hangmanDrawing/0.jpg" />';

    if (sourceType === "Movies") {
        document.getElementById("phrase-selection").innerHTML = `<h2> You have selected the ${sourceType} category </h2>`;
        let challengeRandomIndex = getRandomInt();
        let challengeTitle = SOURCE_MOVIES[challengeRandomIndex];
        generateChallenge(challengeTitle);
        interactiveKeyboard(challengeTitle);
    } else if (sourceType === "Comics") {
        document.getElementById("phrase-selection").innerHTML = `<h2> You have selected the ${sourceType} category </h2>`;
        let challengeRandomIndex = getRandomInt();
        let challengeTitle = SOURCE_COMICS[challengeRandomIndex];
        generateChallenge(challengeTitle);
        interactiveKeyboard(challengeTitle);
    }else{
        alert("Category not found. Please contact your game administrator.");
        window.location.reload(); 
    }
}

/**
 * Return a random number used to select the title used for the challenge
 * @return {number} challengeItem This is a random number
 *
 */
function getRandomInt() {
    let max = SOURCE_MOVIES.length;
    let challengeItem = Math.floor(Math.random() * max);
    return challengeItem;
}

/**
 * Replace letters for underscore or dash in the case of a space.
 * @param {string} challengeTitle 
 */
function generateChallenge(challengeTitle) {
    for (let c of challengeTitle) {
        if (c === " ") {
            challengeTitleLetter.push("<span>-</span>");
        } else {
            challengeTitleLetter.push("<span>_</span>");
        }
    }
    document.getElementById("challengeGuessLetters").innerHTML = challengeTitleLetter.join(" ");
}

/**
 * Check if the user have guesses the correct challenge or the lives are zero
 * 
 * @param {string} challengeTitle Selected challenge
 * @param {string} challengeTitleLetter Guess title
 * @param {number} livesNumber Number of lives left
 */
function checkResult(challengeTitle, challengeTitleLetter, livesNumber) {
    if (challengeTitle === challengeTitleLetter.join("")) {
        challengeCompleted();
    } else if (livesNumber === 0) {
        challengeFailed();
    }
}

/***
 * Displays the winnig popup and allows the user to keep playing.
 */
function challengeCompleted() {
    document.getElementById("modal-bg").style.visibility = "unset";
    document.getElementById("modal-win").style.display = "unset";
    playAgain;
}

/***
 * Displays the losing popup and allows the user to keep playing.
 */
function challengeFailed() {
    document.getElementById("modal-bg").style.visibility = "unset";
    document.getElementById("modal-lose").style.display = "unset";
    playAgain;
}

/**
 * Makes screenkeyboard interactive. After every key is pressed it check if the 
 * letter is present in the challenge.
 * @param {string} challengeTitle Name of the challenge to resolve.
 */
function interactiveKeyboard(challengeTitle) {
    let keys = document.getElementsByClassName("key");

    for (let key of keys) {
        key.addEventListener("click", function () {
            let keyClicked = this.innerHTML;
            key.style.pointerEvents = "none";
            key.style.backgroundColor = "#6868e9";
            key.style.color = "#d9cbcb";
            checkChallenge(keyClicked, challengeTitle);
        });
    }
}

/**
 * Check if the letter clicked is present in the challenge.
 * @param {string} keyClicked innerHTML of the class key element
 * @param {string} challengeTitle Challege to be solved
 */
function checkChallenge(keyClicked, challengeTitle) {
    let letterFound = false;
    for (let i = 0; i < challengeTitle.length; i++) {
        if (keyClicked === challengeTitle[i]) {
            challengeTitleLetter.splice(i, 1, challengeTitle[i]);
            document.getElementById("challengeGuessLetters").innerHTML = challengeTitleLetter.join(" ");
            letterFound = true;
        }
    }
    if (letterFound === false) {
        livesNumber = livesNumber - 1;
        hangmanParts = hangmanParts + 1;
        document.getElementById("number-lives").innerHTML = `<span>${livesNumber} lives left</span>`;
        hangmanDraw(hangmanParts);

    }
    checkResult(challengeTitle, challengeTitleLetter, livesNumber);
}

/**
 * Draws the hangman when a letter is not present in the challenge
 * @param {number} hangmanParts Number used to iterate through the hangman images.
 */
function hangmanDraw(hangmanParts) {

    let hangmanSketch = HANGMAN_STEPS[hangmanParts];
    document.getElementById("draw-graphic").innerHTML = ` <img style="height:100%;width:100%;" src="assets/images/hangmanDrawing/${hangmanSketch}" alt="Drawn of a hangman" />`;
}

/**
 * Reload the page to allow the player to keep playing after pressing the button play again.
 */
function playAgain() {
    window.location.reload();
}

/**
 * Initialised the game by callin newGame function.
 */
function gameInit(){
    let sourceType = this.innerHTML;
    newGame(sourceType);
}

// After the DOMcontent loads an inline function add an eventlistener to the category buttons.
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("draw-graphic").innerHTML = ` <img style="height:100%;width:100%;" src="assets/images/48361197.jpeg" alt="Drawn of a hangman" />`;
   
    let buttons = document.getElementsByClassName("selection");
    for (let button of buttons) {
        button.addEventListener("click", gameInit);
    }

});