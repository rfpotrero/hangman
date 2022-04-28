/** Main function to run the game. 
 * This is invoked after the page loads and the user selects the title source for the game. 
 */
function newGame(sourceType){
    // The below block re-Style the page after the user selection.
    document.querySelectorAll('.selection').forEach(function(hide) {
        hide.style.display= "none";
     });
    document.querySelector('.box-graphic').style.height = "30em"
    document.querySelector('.box-graphic').style.width = "25em"
    
    livesNumber = 10; 
    hangmanParts = 0;
    document.getElementById("number-lives").innerHTML =  `<span>${livesNumber} lives left</span>`;

    document.getElementById("draw-graphic").innerHTML = '<img style="height:100%;width:100%;" src="assets/images/hangmanDrawing/0.jpg" />'

    if (sourceType === "Movies") {
    document.getElementById("phrase-selection").innerHTML = `<h2> You have selected the ${sourceType} category </h2>`;
    let challengeRandomIndex = getRandomInt();
    let challengeTitle = sourceMovies[challengeRandomIndex];
    generateChallenge(challengeTitle);
    interactiveKeyboard(challengeTitle);
    }
}

// Function used to generated a random number
function getRandomInt() {
    let max = sourceMovies.length
    let challengeItem = Math.floor(Math.random() * max); 
    return challengeItem
}

// Function use to display the letter of the guess title as underscores or scores if the character is a space
function generateChallenge(challengeTitle){
    for (let c of challengeTitle){
        if (c === " "){
            challengeTitleLetter.push("<span>-</span>")
        }else{
            challengeTitleLetter.push("<span>_</span>")
        }
      } 
    document.getElementById("challengeGuessLetters").innerHTML =  challengeTitleLetter.join(" ");  
}

function checkResult(challengeTitle,challengeTitleLetter,livesNumber){
    if (challengeTitle === challengeTitleLetter.join("")){
        challengeCompleted()
    } else if (livesNumber === 0){
        challengeFailed()
    }
}

function challengeCompleted(){
    document.getElementById("modal-bg").style.visibility = "unset"
    document.getElementById("modal-win").style.display = "unset"
    console.log("Challenge Completed");
    function playAgain(){
        window.location.reload();
    }
}

function challengeFailed(){
    document.getElementById("modal-bg").style.visibility = "unset"
    document.getElementById("modal-lose").style.display = "unset"
    console.log("Challenge Completed");
    console.log("Challenge Failed");
    function playAgain(){
        window.location.reload();
    }
}


// Function to make the keyboard clickable and change style when a key is pressed.
function interactiveKeyboard(challengeTitle){
    let keys = document.getElementsByClassName("key");

 for (let key of keys) {
        key.addEventListener("click", function() {
           let keyClicked = this.innerHTML;
            key.style.backgroundColor = "blue";
           console.log(keyClicked);
           checkChallenge(keyClicked, challengeTitle)
        });          
    }  
}

// Iterated through the challenge to find a match
function checkChallenge(keyClicked, challengeTitle){
    let letterFound = false;
    for (let i = 0; i < challengeTitle.length; i++) {
          if (keyClicked === challengeTitle[i]) {
         challengeTitleLetter.splice(i, 1, challengeTitle[i])
         document.getElementById("challengeGuessLetters").innerHTML = challengeTitleLetter.join(" ");
         letterFound = true;
         console.log(challengeTitleLetter)
        }
    }
    if (letterFound === false){
        livesNumber = livesNumber -1
        hangmanParts = hangmanParts + 1
        console.log(livesNumber)
        document.getElementById("number-lives").innerHTML =  `<span>${livesNumber} lives left</span>`;
        hangmanDraw(hangmanParts);

    }
    checkResult(challengeTitle,challengeTitleLetter,livesNumber)
}

function hangmanDraw(hangmanParts){

    let hangmanSketch = HANGMAN_STEPS[hangmanParts]
    console.log(HANGMAN_STEPS[hangmanParts])
    document.getElementById("draw-graphic").innerHTML = ` <img style="height:100%;width:100%;" src="assets/images/hangmanDrawing/${hangmanSketch}" alt="Drawn of a hangman" />`
}

function playAgain(){
    window.location.reload();
}

// Arrays to store the name of the callenges.
const sourceMovies = ["TERMINATOR", "ALIENS","SICARIO","EXMACHINA","MALEFICENT","INTERSTELLAR","DIVERGENT","HERCULES","ROBOCOP","BIRDMAN","RUSH","BRAVEHEART"]
const sourceComics = ["BATMAN", "SUPERMAN", "LUCIFER", "WOLVERINE", "DAREDEVIL","HELLBLAZER","HELLBOY","SAGA","AVENGERS","SLAINE"]
const HANGMAN_STEPS = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"]

let challengeTitleLetter = []
let livesNumber = 0
let hangmanParts = 9

// The below create event listener for clicks.
document.addEventListener("DOMContentLoaded", function() {
    
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
           let sourceType = this.innerHTML;
           newGame(sourceType);
        });          
    } 
});