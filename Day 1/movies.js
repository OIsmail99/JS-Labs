let originalMovies = ["inception", "the green mile", "american beauty", "bo7a"];
let copy = [];
for (let i = 0; i < originalMovies.length; i++) {
    copy.push(originalMovies[i]);
}
originalMovies[2] = "interstellar";
// console.log(originalMovies);
// console.log(copy);

function lastItem1(movies) {
    let last = movies.pop();
    movies.push(last);
    return last;
}


function lastItem2(movies) {
    let last = movies.reverse()[0];
    movies.reverse();
    return last;
}

function lastItem3(movies) {
    let last = movies[movies.length - 1];
    return last;
}


let lastArrayItem = originalMovies[originalMovies.length - 1];
let lastArrayItem2 = originalMovies.pop();
originalMovies.push(lastArrayItem2);
let lastArrayItem3 = originalMovies.reverse()[0];
originalMovies.reverse();
console.log(lastArrayItem + " " + lastArrayItem2 + " " + lastArrayItem3);
