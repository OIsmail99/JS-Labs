// // NOTE: Use let const and arrow functions please 

// 1- You're tasked with modeling vehicles and cars in a transportation app:
//     - A Vehicle has type and speed properties.
//     - All vehicles can start and stop.
//     - A Car inherits from Vehicle and has an additional drive method.

//     a- Implement this using ES6 classes
//      - Limit the number of Vehicle instances to 50. If an attempt is made to create the 51st vehicle, throw an error with the message: 'Vehicle limit reached'.
//      - the implementation of the methods can be console.log only or you can leave them empty

//     b- Write a function that checks whether an object is an instance of Car using two different ways

function isInstanceOfCar(obj) {
    return obj instanceof Car;
}

function inInstanceOfCar2(obj) {
    return obj.constructor === Car;
}


class Vehicle {
    static counter = 0;
    constructor(type, speed) {
        if (Vehicle.counter == 50) {
            throw new Error("vehicle limit reached");
        }
        console.log("Vehicle created");
        Vehicle.counter++;
        this.type = type;
        this.speed = speed;
    }
    start() {
        console.log(type + "is starting");
    }
    stop() {
        console.log(type + "is stopping");
    }
}

class Car extends Vehicle {
    constructor(type, speed) {
        super(type, speed);
    }
    drive() {
        console.log(type + "is driving");
    }
}

for (let i = 0; i < 50; i++) {
    new Car(); //
}
let newCar = new Car();
console.log(isInstanceOfCar(newCar));
console.log(inInstanceOfCar2(newCar));