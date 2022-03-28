// This function select random item in the array to use as a challenge.
function newGame(sourceType){

    if (sourceType === "Movies"){
    let challengeIndex = getRandomInt();
    let challengeArray = sourceMovies[challengeIndex];
    console.log(challengeArray);
}


}

// Function used to generated a random number./
function getRandomInt() {
    let max = sourceMovies.length
    let challengeItem = Math.floor(Math.random() * max); 
    return challengeItem
}

function letterSelection(){

}

function hintDisplay(){

}

function playAgain(){
    
}

let sourceMovies = ["Terminator", "The Dark Knight", "Aliens", "The Big Short"]
let sourceComics = ["Batman", "Superman", "Lucifer", "Wolverine", "Daredevil"]

document.addEventListener("DOMContentLoaded", function() {
    
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
           let sourceType = this.innerHTML;
           newGame(sourceType);
        });
        
    }  
});

