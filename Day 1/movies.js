let originalMovies = ["inception", "the green mile", "american beauty", "bo7a"];
let copy = [];
for (let i = 0; i < originalMovies.length; i++) {
    copy.push(originalMovies[i]);
}
originalMovies[2] = "interstellar";
// console.log(originalMovies);
// console.log(copy);

let lastArrayItem = originalMovies[originalMovies.length - 1];
let lastArrayItem2 = originalMovies.pop();
originalMovies.push(lastArrayItem2);
let lastArrayItem3 = originalMovies.reverse()[0];
originalMovies.reverse();
console.log(lastArrayItem + " " + lastArrayItem2 + " " + lastArrayItem3);