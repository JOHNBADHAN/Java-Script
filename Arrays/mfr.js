let arr = [1, 2, 3, 4, 5];
// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }

let newarr = arr.map((e, index, array)=>{
    return e**2
})
console.log(newarr);

let newarr2 = arr.filter((e, index, array)=>{
    return e%2===0
})
console.log(newarr2);
