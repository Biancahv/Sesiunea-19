function Car(name, brand) {
    this.name = name;
    this.brand = brand;
}

Car.prototype.sayHello = function () {
    console.log('Hello');
}

const car = new Car('Ford', 'Mustang');

car.getdescription = function () {
    return `I am a ${this.name} of type ${this.brand}`;
}

console.log(car.getdescription());
console.log(car)


const car2 = new Car('Dacia', 'Logan');
console.log(car2)
