// // console.log("John");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// // boxes[1].style.backgroundColor = "blue";

// // let redbox = document.getElementById("redbox");

// // redbox.style.backgroundColor = "red";


// // // Selects the first element with class "box"
// document.querySelector(".box").style.backgroundColor = "blue";  



// // Selects all elements with class "box"
// console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "blue";
})
