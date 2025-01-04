function isPalindrome(str) {
    if (typeof (str) === "string" || str instanceof String) {

        if (!isNaN(Number(str))) { //if not not a number = if it is a number :D
            console.error("this is not a string");
            return;
        }
        let rev = str.length - 1;
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] != str[rev]) {
                return false;
            }
            rev--;
        }
        return true;
    }
    else {
        console.error("this is not a string");
        return;
    }
}
console.log(isPalindrome("123321")); //error
console.log(isPalindrome("mom")); //true
console.log(isPalindrome("momm")); //false
console.log(isPalindrome(true)); //error