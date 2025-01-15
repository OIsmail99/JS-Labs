
export function selectRandomWord(words) {
    let allKeys = Object.keys(words);
    let randomPropName = allKeys[Math.floor(Math.random() * allKeys.length)];
    let randomWordObj = words[randomPropName][Math.floor(Math.random() * words[randomPropName].length)];

    return { category: randomPropName, word: randomWordObj.word, hint: randomWordObj.hint };
}


export function createLetterSpans() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let lettersArray = Array.from(letters);
    let lettersContainer = document.getElementsByClassName("letters")[0];
    for (let i = 0; i < lettersArray.length; i++) {
        let span = document.createElement("span");
        let theLetter = document.createTextNode(lettersArray[i]);
        span.appendChild(theLetter);
        span.className = "letter-box"; 
        lettersContainer.appendChild(span);
    }
}


export function createEmptyWordSpans(randomWord) {
    let lettersGuessContainer = document.getElementsByClassName("letters-guess")[0];
    for (let i = 0; i < randomWord.length; i++) {
        let emptySpan = document.createElement("span");
        lettersGuessContainer.appendChild(emptySpan);
    }
}


export function displayAttempts(attemptsLeft) {
    let attemptsDiv = document.createElement("div");
    attemptsDiv.className = "attempts";
    attemptsDiv.textContent = "Attempts Left: " + attemptsLeft;
    document.getElementsByClassName("game-info")[0].appendChild(attemptsDiv);
}


export function updateAttempts(attemptsLeft, attemptsDiv) {
    attemptsLeft--;
    attemptsDiv.textContent = "Attempts Left: " + attemptsLeft; //update html
    return attemptsLeft; //cuz I will use it in main
}
