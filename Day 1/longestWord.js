function longestWord(sentence) {
    if (typeof (sentence) !== "string") {
        console.error("this is not a string");
    }
    let sub = " ";
    let max = 0;
    let longest = " ";
    for (let i = 0; i < sentence.length; i++) {
        let j;
        if (sentence[i] != " ") {
            j = i; //j points to the first index of the word

            while (sentence[j] != " " && j < sentence.length) {
                j++;
            }
            sub = sentence.substring(i, j);
            if (sub.length > max) {
                max = sub.length;
                longest = sub;
            }
        }
        i = j;
    }
    return longest
}
let longest = longestWord("what's the longest word here?");
let longest2 = longestWord("I <3 Mina");
console.log(longest);
console.log(longest2);