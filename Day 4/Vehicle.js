function Vehicle(type, property) {
    if (Vehicle.count >= 50) {
        throw new Error("cannot create more objects");
    }
    this.type = type,
        this.property = property,
        this.start = function () {
            return this.type + " starting";
        },
        this.stop = function () {
            return this.type + " stopping";
        }
    console.log("New vehicle created");
    Vehicle.count++;
}
Vehicle.count = 0;

function Car(type, property) {
    //car is now inheriting properties of Vehicle.
    Vehicle.call(this, type, property);

    this.drive = function () {
        return "Car is driving";
    };
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

var mg = new Car("mg", "value");
var vehicle = new Vehicle();

// for (var i = 1; i <= 51; i++) { //the last instance (51) will throw an error
//     try {
//         new Car();
//     }
//     catch (e) {
//         console.log(e.message);
//     }
// }
function isInstanceOfCar(obj) {
    return obj instanceof Car;
}

console.log(isInstanceOfCar(mg)); //true
console.log(isInstanceOfCar(vehicle)); //false



// console.log(mg.type);
// console.log(mg.start());
// console.log(mg.__proto__); //Vehicle