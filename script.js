/** Main function to run the game. 
 * This is invoked after the page loads and the user selects the title source for the game. 
 */
function newGame(sourceType) {

    // Arrays to store the name of the callenges.
    let sourceMovies = ["Terminator", "The Dark Knight", "Aliens", "The Big Short"]
    let sourceComics = ["Batman", "Superman", "Lucifer", "Wolverine", "Daredevil"]

    let phrase = document.getElementById("gameCategoryPhrase");


    let challengeTitleLetter = [];  // Array use to construct the challenge replace letters by "_" and space by "-" 
    let pickupLetters = [] // Array to store the pick letters

    // This will select the correct category. 
    if (sourceType === "Movies") {
        let challengeTitle = sourceMovies[getRandomInt()];
        generateChallenge(challengeTitle);
        console.log(challengeTitle)
        interactiveKeyboard(challengeTitle);
    }

    // Function used to generated a random number
    function getRandomInt() {
        let max = sourceMovies.length
        let challengeItem = Math.floor(Math.random() * max);
        return challengeItem
    }

    // Function use to display the letter of the guess title as underscores or scores if the character is a space
    function generateChallenge(challengeTitle) {
        for (let c of challengeTitle) {
            if (c === " ") {
                challengeTitleLetter.push("<span>-</span>")
            } else {
                challengeTitleLetter.push("<span>_</span>")
            }
        }
        document.getElementById("challengeGuessLetters").innerHTML = challengeTitleLetter.join(" ");
    }

    // Function to select check if the letter clicked is present in the challenge and update.
    function checkChallenge(keyClicked, challengeTitle){
        for (let i = 0; i < challengeTitle.length; i++) {
            if (keyClicked === challengeTitle[i] ) {
           challengeTitleLetter.splice(i, 1, challengeTitle[i])
           document.getElementById("challengeGuessLetters").innerHTML = challengeTitleLetter.join(" ");
      }
      }
    }

    // Function to make the keyboard clickable and change style when a key is pressed.
    // Pending to include validation in to avoid selecting the key twice.
    function interactiveKeyboard(challengeTitle) {
        let keys = document.getElementsByClassName("key");

        for (let key of keys) {
            key.addEventListener("click", function () {
                let keyClicked = this.innerHTML;
                key.style.backgroundColor = "blue";
                pickupLetters.push(keyClicked);
                console.log(pickupLetters);
                checkChallenge(keyClicked, challengeTitle)
            });
        }
    }
}
// The below create event listener for clicks after the page loads
document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let sourceType = this.innerHTML;
            newGame(sourceType);
        });
    }
    newGame();

});
