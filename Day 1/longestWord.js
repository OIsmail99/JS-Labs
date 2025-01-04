function longestWord(sentence) {
    let longest;


    return longest;
}

let sentence = "I <3 Mina";

let max = 0;
let longest = "";

for (let i = 0; i < sentence.length; i++) { //index of the sentence
    if (sentence[i] != " ") { // Start of a word
        let j = i; // Initialize j to start of the word
        while (j < sentence.length && sentence[j] != " ") { // Find end of the word
            j++;
        }
        let sub = sentence.substring(i, j); // Extract the word
        if (sub.length > max) { // Check if it's the longest so far
            max = sub.length;
            longest = sub;
        }
        i = j; // Move i to the end of the current word
    }
}
console.log(longest);