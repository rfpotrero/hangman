// Arrays to store the name of the callenges.
const SOURCE_MOVIES = ["TERMINATOR", "ALIENS", "SICARIO", "EXMACHINA", "MALEFICENT", "INTERSTELLAR", "DIVERGENT", "HERCULES", "ROBOCOP", "BIRDMAN", "RUSH", "BRAVEHEART"];
const SOURCE_COMICS = ["BATMAN", "SUPERMAN", "LUCIFER", "WOLVERINE", "DAREDEVIL", "HELLBLAZER", "HELLBOY", "SAGA", "AVENGERS", "SLAINE"];
const HANGMAN_STEPS = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];

// Globlal variables.
let challengeTitleLetter = [];
let livesNumber = 0;
let hangmanParts = 9;


/** Main function to run the game. 
 * This is invoked after the page loads and the user selects the title source for the game. 
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
        alert("Category not found. Please contact your game administrator.")
        window.location.reload(); 
    }
}

// Function used to generated a random number
function getRandomInt() {
    let max = SOURCE_MOVIES.length;
    let challengeItem = Math.floor(Math.random() * max);
    return challengeItem;
}

// Function use to display the letter of the guess title as underscores or scores if the character is a space
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

function checkResult(challengeTitle, challengeTitleLetter, livesNumber) {
    if (challengeTitle === challengeTitleLetter.join("")) {
        challengeCompleted();
    } else if (livesNumber === 0) {
        challengeFailed();
    }
}

function challengeCompleted() {
    document.getElementById("modal-bg").style.visibility = "unset";
    document.getElementById("modal-win").style.display = "unset";
    function playAgain() {
        window.location.reload();
    }
}

function challengeFailed() {
    document.getElementById("modal-bg").style.visibility = "unset";
    document.getElementById("modal-lose").style.display = "unset";
    function playAgain() {
        window.location.reload();
    }
}


// Function to make the keyboard clickable and change style when a key is pressed.
function interactiveKeyboard(challengeTitle) {
    let keys = document.getElementsByClassName("key");

    for (let key of keys) {
        key.addEventListener("click", function () {
            let keyClicked = this.innerHTML;
            key.style.backgroundColor = "#6868e9";
            key.style.color = "#d9cbcb";
            checkChallenge(keyClicked, challengeTitle);
        });
    }
}

// Iterated through the challenge to find a match
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

function hangmanDraw(hangmanParts) {

    let hangmanSketch = HANGMAN_STEPS[hangmanParts];
    document.getElementById("draw-graphic").innerHTML = ` <img style="height:100%;width:100%;" src="assets/images/hangmanDrawing/${hangmanSketch}" alt="Drawn of a hangman" />`;
}

function playAgain() {
    window.location.reload();
}

function gameInit(){
    let sourceType = this.innerHTML;
    newGame(sourceType);
}

// The below create event listener for clicks in the category buttons after the page loads.
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("draw-graphic").innerHTML = ` <img style="height:100%;width:100%;" src="assets/images/48361197.jpeg" alt="Drawn of a hangman" />`;
   
    let buttons = document.getElementsByClassName("selection")
    for (let button of buttons) {
        button.addEventListener("click", gameInit)
    }

});