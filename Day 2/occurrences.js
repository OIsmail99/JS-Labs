function numberOfOccurrences(sentence, char) {
    if (typeof (sentence) !== "string" || typeof (char) !== "string") {
        console.error("please enter a sentence and a character");
        return;
    }
    let charArray = sentence.split("");
    let counter = 0;
    for (let i = 0; i < charArray.length; i++) {
        if (char === charArray[i]) {
            counter++;
        }
    }
    return counter;
}
console.log(numberOfOccurrences("I need a nickle please", 'n'));
