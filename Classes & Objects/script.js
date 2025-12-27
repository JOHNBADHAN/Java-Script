// let obj = {
//     name: "John",
//     age: 20,
//     isStudent: true
// };

// console.log(obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };              

// rabbit.__proto__ = animal; // Setting prototype


class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created");
        
    }

    eats() {
        console.log("I am eating");
    }

    jumps() {
        console.log("I am jumping");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("Lion object is created");
    }

    eats() {
        super.eats(); // Calling parent class method
        console.log("Simba is eating");
    }
    roar() {
        console.log("Roarrrr");
    }   
}

let lion = new Lion("Simba"); // Creating object
console.log(lion);

let rabbit = new Animal("Rabbit"); // Creating object
console.log(rabbit);
