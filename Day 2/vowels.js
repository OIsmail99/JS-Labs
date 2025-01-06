function numberOfVowels(sentence) {
    if (typeof (sentence) !== "string") {
        throw Error("please enter a number");
    }
    let counter = 0;
    let vowels = ["a", "e", "o", "u", "i"];
    for (let i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence.charAt(i).toLowerCase())) {
            counter++;
        }
    }
    return counter;
}

try {
    console.log(numberOfVowels(123));
}
catch (e) {
    console.log(e);
}
