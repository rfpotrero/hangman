/** Main function to run the game. 
 * This is invoked after the page loads and the user selects the title source for the game. 
 */
function newGame(sourceType){
    
    if (sourceType === "Movies") {
    let challengeRandomIndex = getRandomInt();
    let challengeTitle = sourceMovies[challengeRandomIndex];
    generateChallenge(challengeTitle);
    console.log(challengeTitle);
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

function hintDisplay(){
}

function playAgain(){  
}

// Arrays to store the name of the callenges.
let sourceMovies = ["Terminator", "The Dark Knight", "Aliens", "The Big Short"]
let sourceComics = ["Batman", "Superman", "Lucifer", "Wolverine", "Daredevil"]

let templatePhrase = "<h1> You have selected the Movies category </h1>";
let phrase = document.getElementById("gameCategoryPhrase");
let challengeTitleLetter = [];

// The below create event listener for clicks.
document.addEventListener("DOMContentLoaded", function() {
    
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
           let sourceType = this.innerHTML;
           newGame(sourceType);
        });          
    }  
    newGame();
    
});

