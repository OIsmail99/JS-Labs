// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");


lettersArray.forEach(letter => { //span for each letter.

    let span = document.createElement("span");
    // Create text of the span, then adding it to the span
    let theLetter = document.createTextNode(letter); //text
    span.appendChild(theLetter);
    span.className = 'letter-box'; //to be styled
    lettersContainer.appendChild(span); //add to the container.

});

//category: arr of words
const words = {
    programming: ["java", "javascript", "golang", "ruby", "fortran", "r", "mysql", "python"],
    movies: ["A cure for wellness", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "The green mile", "Up"],
    people: ["", "Omar", "Osama", "Mina", "Helmy"],
    countries: ["Syria", "Palestine", "Sweeden", "Egypt", "Saudi", "Denmark"]
}

// Get Random Property
let allKeys = Object.keys(words); //random prop
let randomPropNumber = Math.floor(Math.random() * allKeys.length); //random index of the key
let randomPropName = allKeys[randomPropNumber]; //random category
let randomPropValue = words[randomPropName]; //array of words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length); //random index of the array
let randomValueValue = randomPropValue[randomValueNumber]; //the word
// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;
// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);

// Create Spans Depened On Word
lettersAndSpace.forEach(letter => {

    // Create Empty Span
    let emptySpan = document.createElement("span");

    // If Letter Is Space
    if (letter === ' ') {

        // Add Class To The Span
        emptySpan.className = 'with-space';

    }

    // Append Span To The Letters Guess Container
    lettersGuessContainer.appendChild(emptySpan);

});

// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts
let wrongAttempts = 0;

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

// Handle Clicking On Letters
document.addEventListener("click", (e) => {

    // Set The Choose Status
    let theStatus = false;

    if (e.target.className === 'letter-box') {

        e.target.classList.add("clicked");

        // Get Clicked Letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        // The Chosen Word
        let theChosenWord = Array.from(randomValueValue.toLowerCase());

        theChosenWord.forEach((wordLetter, WordIndex) => {

            // If The Clicked Letter Equal To One Of The Chosen Word Letter
            if (theClickedLetter == wordLetter) {

                // Set Status To Correct
                theStatus = true;

                // Loop On All Guess Spans
                guessSpans.forEach((span, spanIndex) => {

                    if (WordIndex === spanIndex) {

                        span.innerHTML = theClickedLetter;

                    }

                });

            }

        });

        // Outside Loop

        // If Letter Is Wrong
        if (theStatus !== true) {

            // Increase The Wrong Attempts
            wrongAttempts++;

            // Add Class Wrong On The Draw Element
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            // Play Fail Sound
            document.getElementById("fail").play();

            if (wrongAttempts === 8) {

                endGame();

                lettersContainer.classList.add("finished");

            }

        } else {

            // Play Success Sound
            document.getElementById("success").play();

        }

    }

});

// End Game Function
function endGame() {

    // Create Popup Div
    let div = document.createElement("div");

    // Create Text
    let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

    // Append Text To Div
    div.appendChild(divText);

    // Add Class On Div
    div.className = 'popup';

    // Append To The Body
    document.body.appendChild(div);

}