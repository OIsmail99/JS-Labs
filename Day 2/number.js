function sumOfDigits(number) {
    if (isNaN(number) || typeof (number) !== "number") {
        console.log("please enter a number");
        return;
    }
    let sum = 0;
    let numberStr = number.toString();
    for (let i = 0; i < numberStr.length; i++) {
        sum += (Number(numberStr[i])) % 10;
    }
    return sum;
}
console.log(sumOfDigits(123));