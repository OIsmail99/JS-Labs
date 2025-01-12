// Adding the average method to Array.prototype
Array.prototype.average = function () { //this is the array.
    if (this.length === 0) {
        throw new Error("Array is empty");
    }

    // Validate that all elements are numbers
    if (!this.every(item => typeof item === "number")) {
        throw new Error("Array elements must be numbers");
    }
    // Calculate the average
    const sum = this.reduce((acc, number) => acc + number, 0);
    return sum / this.length;
};
arr = [1, 2, 3];
console.log(arr.average()); //2