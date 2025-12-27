let a = prompt("Enter First Number")

let b = prompt("Enter Second Number")

// let sum = Number(a) + Number(b)
let sum = parseInt(a) + parseInt(b)

if (isNaN(a) || isNaN(b)){
    throw SyntaxError("Nah BRo, Enter numbers only")
}

// if (sum<5){
//     throw SyntaxError("Sum is less than 5")
// }

function main(){
let x = 1;
try {
    console.log("The sum is", sum-x);
    return true
    
} catch (error) {
    console.log("What is this shit?");
    return false
}

// finally runs the code with return
    finally{
        console.log("That's all folks!")
    }
}

let c = main()