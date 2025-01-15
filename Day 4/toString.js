Object.prototype.toString = function () {
    return "this is an object";
}


var obj = { message: "this is a message" };
obj.toString = function () {
    return this.message;
}

console.log(String({ num: 3 }));
console.log(String(obj));
console.log(String({}))