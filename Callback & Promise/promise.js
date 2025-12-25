console.log('Hi, This is promise');

let p1 = new Promise((resolve, reject) =>{

    let a = Math.random()
    if (a > 0.5){
        reject("Nah Bro")
    }
    else{
        setTimeout(() => {
            console.log("Welcome To Neverland");
            resolve("You are now inside");
        }, 2000);
    }
});



let p2= new Promise((resolve, reject) =>{

    let a = Math.random()
    if (a > 0.5){
        reject("Nah Bro")
    }
    else{
        setTimeout(() => {
            console.log("you are in Promise 2");
            resolve("You are now inside");
        }, 2000);
    }
});

let p3 = Promise.race([p1, p2]);
p3.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})