let button = document.getElementById("btn");

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML= "YOO GYYS" 
});

button.addEventListener("contextmenu", ()=>{
    alert("Right Clicked");
});

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})