function gameSelection(event){
  
}

function letterSelection(){

}

function hintDisplay(){

}

function playAgain(){
    
}

let sourceMovies = ["Terminator", "The Dark Knight"]
let sourceComics = ["Batman", "Superman"]

document.addEventListener("DOMContentLoaded", function() {
    
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
           let sourceType = this.innerHTML;
            alert(`You clicked ${sourceType}`);
            // Pending to add a redirect to the game.html.
        });
    }
});

