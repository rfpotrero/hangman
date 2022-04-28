## Purpose of the project
* Creating a hangman game to develop javascript skills. This will be achieve by using the most common actions, iterated through objects, flow control and using OOP principles, etc..
## User stories
* A visiting user wants to play hangman. [Wireframe]() / [Issue Tracker](https://github.com/rfpotrero/hangman/issues?q=label%3A%22Game+Basis%22+)
* A visiting user can choose the type of challenge to play in hangman. [Wireframe]() / [Issue Tracker]()
* A visiting can play as many games as they want by clicking in the play again button. [Wireframe]() / [Issue Tracker](https://github.com/rfpotrero/hangman/issues?q=label%3A%22Game+Result%22+)
## Features
* Able to select the source of the challenge (Movies or books)
* Keep track of the letter used.
* Keep track of the number of lives left.
* Able to play as many times as desired by clicking in the Play again button. 
## Future features
* Adding more sources of challenge, ie: Books, Series, etc..
* A visiting user can choose to sacrifice one live for a hint. 
## Typography and color scheme
## Wireframes
* Wireframes for the project can be found [HERE](docs/wireframes/).
## Technology
* CSS 
CSS was used to sytle the page. We are using a external CSS file to style the pages.  
* HTML 
The website was build using HTML.
* Javascript
Javascript was used to build the logics and code the game. It was also used to manipulate the DOM using CSS
* Github
Github was selected as the version control. 
## Testing
   1. Code validation
      * CSS validation 
      * HTML Validation 
      * Javascript Validation
   2. Test cases
      * A visiting user wants to play hangman.
        1. User navigate to the page INSERT LIVE PAGE HERE.
           - Expected result: The welcome page will be displayed.

      * A visiting user can choose the type of challenge to play in hangman.
        1. User click in the movies or comic buttons located in the welcome page. 
           - Expected Result: The buttos will disappear and the game will start with the correct source for the challenge Movies or Comics

      * A visiting user click in the interactive keyboard to guess the challenge. 
        1. User click in the interactive keyboard.
           - Expected Result: 
             * The key pressed will change the background colour
             * If the key letter pressed is present in the challenge it will change from a dash to the clicked key letter. 
             * If the key letter is not present one live will be deducted and the hangman drawing move forward 1 step.

      * A visiting can play as many games as they want by clicking in the play again button.
        1. Once the lives reached 0 or the challenge is resolved a pop up will present the user with a play again button. 
           - Expected Result: 
             * The user will click in the play again button. 
             * The page will reload directing the use to the welome page to choose the challenge source 
             * Clicking in the challenge source will start a new game. 
              
   3. Fixed bugs
      * Pending to review this using the Issues section in Github.
   4. Supported screens and browsers
      * Iphone 6,7,8 
      * Ipad Pro
9. Deployment
* Github pages
Github pages is the selected method to deploy this site. 
10. credits
* Code for random numbers [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
* Base code for Modal in CSS [W3 Schools](https://www.w3schools.com/howto/howto_css_delete_modal.asp)
* Image for hangman Marc Oliveras [Hangman](https://www.oligalma.com/en/downloads/images/hangman)
