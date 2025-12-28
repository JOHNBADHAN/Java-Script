

(async function main() {  // IIFE Immediately Invoked Function Expression
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);

    // let x,y = [4,8]  // wrong way
    let [x, y, ...rest] = [4, 8, 9, 10, 12, 33, 45, 56];  // destructuring assignment
    console.log(x, y, rest);



    let obj = {        
        name: "John",
        age: 30,
        city: "New York"
    };

    let {name, age, city} = obj;  // destructuring assignment for objects
    console.log(name, age, city);
    
let arr = [2, 4, 6]
// console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr)) // Spread Operator 

    
    
})()


// async function sleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(45);
//         }, 1000);
//     });
// }      

// function sum(a, b, c){
//     return a+b+c

// }
console.log(a1);

var a1 = 8; // Hoisting 

//Hoisting Doesn't work in let and const
const sleep = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

const sum = async (a, b, c)=>{
    return a+b+c
}