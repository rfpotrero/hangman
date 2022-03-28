function gameSelection(event){
  
}

function letterSelection(){

}

function hintDisplay(){

}

function playAgain(){
    
}

document.addEventListener("DOMContentLoaded", function() {
    
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
           let gameType = this.innerHTML;
            alert(`You clicked ${gameType}`);
            // Pending to add a redirect to the game.html.
        });
    }
});

