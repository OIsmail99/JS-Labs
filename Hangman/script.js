// adding spans of letters
const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
let lettersContainer = document.getElementsByClassName("letters")[0];
lettersArray.forEach((letter) => {
    let span = document.createElement("span");
    let theLetter = document.createTextNode(letter); //character
    span.appendChild(theLetter);
    span.className = "letter-box"; // to be styled
    lettersContainer.appendChild(span); // add inside the parent (letters div).
});

// words is an object with caregory as key and an array of objects as value.
const words = {
    programming: [
        { word: "java", hint: "write once, run everywhere" },
        { word: "javascript", hint: "A scripting language." },
        { word: "python", hint: "A snake" },
    ],
    movies: [
        { word: "inception", hint: "A sci-fi movie" },
        { word: "parasite", hint: "A South Korean thriller." },
    ],
    countries: [
        { word: "egypt", hint: "Pyramids" },
        { word: "japan", hint: "Technology" },
    ],
};

// select random word along with its hint.
let allKeys = Object.keys(words);
let randomPropName = allKeys[Math.floor(Math.random() * allKeys.length)]; // category
let randomWordObj =
    words[randomPropName][Math.floor(Math.random() * words[randomPropName].length)]; // word object
let randomWord = randomWordObj.word;
let randomHint = randomWordObj.hint;



// displaying category and hint
document.getElementsByClassName("category")[0].innerHTML = "Category: <span>" + randomPropName + "</span>";
let hintDiv = document.getElementsByClassName("hint")[0];
hintDiv.textContent = "Hint:" + randomHint;


// Display attempts left
let attemptsLeft = 6;
let attemptsDiv = document.createElement("div");
attemptsDiv.className = "attempts";
attemptsDiv.textContent = "Attempts Left: " + attemptsLeft;
document.getElementsByClassName("game-info")[0].appendChild(attemptsDiv);

// Create empty spans for the chosen word in the letters-guess container
let lettersGuessContainer = document.getElementsByClassName("letters-guess")[0];
Array.from(randomWord).forEach((letter) => {
    let emptySpan = document.createElement("span");
    lettersGuessContainer.appendChild(emptySpan);
});

let guessSpans = document.querySelectorAll(".letters-guess span");
let wrongAttempts = 0;


// Handle letter clicks
document.addEventListener("click", (e) => {
    // if (lettersGuessContainer.className === "letter-guess finished") {
    //     return;
    // }
    let theStatus = false;

    if (e.target.className === "letter-box") {
        e.target.classList.add("clicked");
        let theClickedLetter = e.target.innerHTML;

        Array.from(randomWord).
            map((wordLetter, wordIndex) => {
                if (theClickedLetter === wordLetter) {
                    theStatus = true;
                    guessSpans[wordIndex].innerHTML = theClickedLetter;
                    document.getElementById("success").play();
                }
            });

        if (!theStatus) {
            wrongAttempts++;
            attemptsLeft--;
            attemptsDiv.textContent = "Attempts Left: " + attemptsLeft; // Update UI
            document.getElementById("fail").play();

            if (attemptsLeft === 0) {
                endGame("Game Over! The word was:");
            }
        }


        
        let allCorrect = true;
        guessSpans.forEach((span) => {
            if (span.innerHTML === "") {
                allCorrect = false;
            }
        });
        if (allCorrect) {
            //document.getElementById("success").play();
            endGame("Congratulations! You guessed the word: ");
        }
    }
});


let timerDiv = document.getElementsByClassName("timer")[0];


let remaining = 60;

let timer = setInterval(() => {
    remaining--;
    timerDiv.textContent = "Time left: " + remaining + " seconds";
    if (remaining == 0) {
        clearInterval(timer);
        document.getElementById("fail").play();
        endGame("Time's up! The word was:");
    }
}, 1000);

// End the Game
function endGame(message) {
    clearInterval(timer);
    let div = document.createElement("div");
    div.className = "popup";
    div.innerHTML = message + "<strong>" + randomWord + "</strong><br>";
    let reloadBtn = document.createElement("button");
    reloadBtn.textContent = "Play Again";
    reloadBtn.onclick = () => location.reload();
    div.appendChild(reloadBtn);
    document.body.appendChild(div);
    lettersContainer.classList.add("finished");
}
