## Purpose of the project
* Creating a hangman game to develop javascript skills. This will be achieve by using the most common actions, iterated through objects, flow control and using OOP principles, etc..
## User stories
* A visiting user wants to play hangman. [Wireframe](docs/wireframes/Welcome.png) / [Issue Tracker](https://github.com/rfpotrero/hangman/issues?q=label%3A%22Game+Basis%22+)
* A visiting user can choose the type of challenge to play in hangman. [Wireframe](docs/wireframes/Game.png) / [Issue Tracker]()
* A visiting can play as many games as they want by clicking in the play again button. [Wireframe](docs/wireframes/Result.png) / [Issue Tracker](https://github.com/rfpotrero/hangman/issues?q=label%3A%22Game+Result%22+)
## Features
* Able to select the source of the challenge (Movies or books)
* Keep track of the letter used.
* Keep track of the number of lives left.
* Able to play as many times as desired by clicking in the Play again button. 
## Future features
* Adding more sources of challenge, ie: Books, Series, etc..
* A visiting user can choose to sacrifice one live for a hint. 
## Typography and color scheme
* I have decided for a grey and back colours for the game for accesibility and rather than use plenty of graphics I wanted something that could load quite easily and didn't have troubles with responsiveness.
* Background colour : rgb(228 226 226);
* Font colour: #151515;
## Wireframes
* Wireframes for the project can be found [HERE](docs/wireframes/).
## Technology
* CSS
  - CSS was used to sytle the page. We are using a external CSS file to style the pages.  
* HTML 
  - The website was build using HTML.
* Javascript
  - Javascript was used to build the logics and code the game. It was also used to manipulate the DOM using CSS
* Github
  - Github was selected as the version control. 
* Balsamiq Desktop
  - This was used to create the wireframes included in this readme.md
## Testing
   1. ### Code validation
      * CSS validation 
        * CSS validation wihtout errors. Report [HERE](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Frfpotrero.github.io%2Fhangman%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
      * HTML Validation 
        * No Error found. Report can be found [HERE](https://validator.w3.org/nu/?doc=https%3A%2F%2Frfpotrero.github.io%2Fhangman%2F)
      * Lighthouse mobile report [HERE](docs/lighthousemobilereport.png)
      * JavaScript Validation using JShint. No errors were founds [HERE](docs/jshint.png)
   
   2. ### Test Cases
      1. A visiting user wants to play hangman.
         * User navigate to the live Hangman site [HERE](https://rfpotrero.github.io/hangman/).
           - Expected result: The welcome page will be displayed.
           - Test successful. Page displayed correctly results [Mobile Here](docs/testCases/testcase1mobile.png) [Desktop Here](docs/testCases/testcase1desktop.png)


      2. A visiting user can choose the type of challenge to play in hangman.
         *  User click in the movies or comic buttons located in the welcome page. 
            - Expected Result: The buttos will disappear and the game will start with the correct source for the challenge Movies or Comics
            - Test successful. Selection buttons disappeared and the game stars. Results [Mobile Here](docs/testCases/tescase2mobile.png) [Desktop Here](docs/testCases/testcase2desktop.png)

      3. A visiting user click in the interactive keyboard to guess the challenge. 
         * User click in the interactive keyboard.
           - Expected Result: 
             * The key pressed will change the background colour
             * If the key letter pressed is present in the challenge it will change from a dash to the clicked key letter. 
             * If the key letter is not present one live will be deducted and the hangman drawing move forward 1 step.
           - Result successful:
             * Key change background color. Result [Mobile Here](docs/testCases/tescase3mobile1.png) [Desktop Here](docs/testCases/testcase3desktop1.png)
             * If the letter is present in the challenge it is displayed. Result [Mobile Here](docs/testCases/testcase3mobile2.png) [Desktop Here](docs/testCases/testcase3desktop2.png)
             * If the letter is not present the hangman draw moves forward one steps and one is deducted. Result [Mobile Here](docs/testCases/testcase3mobile2.png) [Desktop Here](docs/testCases/testcase3desktop3.png)
      4. A visiting can play as many games as they want by clicking in the play again button.
         *  Once the lives reached 0 or the challenge is resolved a pop up will present the user with a play again button. 
           - Expected Result: 
             * The user will click in the play again button. 
             * The page will reload directing the use to the welome page to choose the challenge source 
             * Clicking in the challenge source will start a new game. 
           - Result Successful
             * Once the game ends the game display a popup with the result [Mobile Here](docs/testCases/testcase4mobile.png) [Desktop Here](docs/testCases/testcase4desktop1.png)
             * Clicking in the Try Again button reload the page to start a new game [Mobile Here](docs/testCases/testcase1mobile.png) [Desktop Here](docs/testCases/testcase1desktop.png)
              
   3. ### Fixed bugs
      * [Issue23](https://github.com/rfpotrero/hangman/issues/23) Add else statement to IF loop inside newGame Function for error handling.
      * [Issue 24](https://github.com/rfpotrero/hangman/issues/24) Code refactoring to improve readability and fix bug introduced in issue #23.
   4. ### Supported screens and browsers
      * Iphone 6,7,8 
      * Ipad Pro
      * Macbook pro 13inches. 
## Deployment
* Github pages
  * Github pages is the selected method to deploy this site.
    - To deploy this site to the internet follow the steps below:
      * Navigate to project repository
      * Click in Settigs at the repository navigation bar.
      * In Code and Automation click in Pages
      * Under Source select Main or the correct branch and click in save.
      * The website will take a few minutes to be live.
      * A 404.html was created to handle browsers error. 
* Gitpod
   * Gitpod can be used to deploy the site locally for testing purposes. To deploy the site follow the steps below:
     - Navigate to project repository
     - Click in the Gitpod button in the right.
     - This will launch the workspace in Gitpo. Select use browser or local VS Code Studio.
     - Navigate to the terminal, at the bottom by default, and enter the following command: python3 -m http.sever
     - Enter the following URL in your browser http://localhost:8000/ . By default gitpod uses port 8000

## Credits
* Code for random numbers [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
* Base code for Modal in CSS [W3 Schools](https://www.w3schools.com/howto/howto_css_delete_modal.asp)
* Image for hangman Marc Oliveras [Hangman](https://www.oligalma.com/en/downloads/images/hangman)
