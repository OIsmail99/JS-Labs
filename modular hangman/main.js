import { selectRandomWord, createLetterSpans, createEmptyWordSpans, displayAttempts, updateAttempts } from './hangmanFunctions.js';

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

let randomWordObj = selectRandomWord(words); //random object.
let randomWord = randomWordObj.word;
let randomHint = randomWordObj.hint;
let randomCategory = randomWordObj.category;


document.getElementsByClassName("category")[0].innerHTML = "Category: <span>" + randomCategory + "</span>";
let hintDiv = document.getElementsByClassName("hint")[0];
hintDiv.textContent = "Hint: " + randomHint;


let attemptsLeft = 6;
displayAttempts(attemptsLeft);


createEmptyWordSpans(randomWord);

let guessSpans = document.querySelectorAll(".letters-guess span");
let wrongAttempts = 0;


document.addEventListener("click", (e) => {
    let theStatus = false;

    if (e.target.className === "letter-box") {
        e.target.classList.add("clicked");
        let theClickedLetter = e.target.innerHTML;

        for (let i = 0; i < randomWord.length; i++) {
            if (theClickedLetter === randomWord[i]) {
                theStatus = true;
                guessSpans[i].innerHTML = theClickedLetter;
                document.getElementById("success").play();
            }
        }

        if (!theStatus) {
            wrongAttempts++;
            attemptsLeft = updateAttempts(attemptsLeft, document.getElementsByClassName("attempts")[0]);
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
            endGame("Congratulations! You guessed the word: ");
        }
    }
});


let timerDiv = document.getElementsByClassName("timer")[0];
let remaining = 60;
let timer = setInterval(() => {
    remaining--;
    timerDiv.textContent = "Time left: " + remaining + " seconds";
    if (remaining === 0) {
        clearInterval(timer);
        document.getElementById("fail").play();
        endGame("Time's up! The word was:");
    }
}, 1000);


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
    document.getElementsByClassName("letters")[0].classList.add("finished");
}

//create the keyboard
createLetterSpans();
