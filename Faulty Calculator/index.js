console.log("Faulty Calculator")

let a = 5;
let b = 7;

let random = Math.random()
if (random > 0.1) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
    console.log("Division:", a / b);
}

else {
    console.log("Addition:", a - b);
    console.log("Subtraction:", a / b);
    console.log("Multiplication:", a + b);
    console.log("Division:", a ** b);
}





