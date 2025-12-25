let a=[1,2,3,4,5]   
console.log(a);

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}

a.forEach((value, i, arr)=>{
    console.log(value, i, arr);
})

let  obj={
    a:1,
    b:2,
    c:3
}

// for(let key in obj){
//     console.log(key, obj[key]);
// }

// for(let key of Object.keys(obj)){
//     console.log(key, obj[key]);
// }

// for(let [key, value] of Object.entries(obj)){
//     console.log(key, value);
// }

for(let value of a){
    console.log(value);
}