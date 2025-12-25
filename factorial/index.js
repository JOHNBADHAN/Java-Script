let A=prompt("Enter a number to calculate its factorial:");
function factorial(n){
    if(n<0){
        return "Factorial is not defined for negative numbers.";    
    } else if(n===0 || n===1){
        return 1;
    } else {
        let result=1;
        for(let i=2;i<=n;i++){
            result*=i;
        }   
        return result;
    }
}
console.log(`The factorial of ${A} is ${factorial(Number(A))}`);

// let a=prompt("Enter a number to calculate its factorial:");

// let fac=1;
// for(i=1;i<=a;i++){
//     fac=fac*i;
// }
// console.log(`The factorial of ${a} is ${fac}`);

// using reduce function

// let num=[];
// for (let i = 0; i<=a; i++) {
//     num[i]=a-i
// }
// const red=(a, b)=>{
//     return a*b
// }
// console.log(num.reduce(red))


let a = 7

function factorial(number){
   let arr = Array.from(Array(number+1).keys())
   let c = arr.slice(1,).reduce((a, b)=> a*b )
   return c
}


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))