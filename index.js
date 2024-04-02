// const buttons = document.querySelectorAll(".drum");
// function handleClick(){
//     alert("I got clicked!")
// }
// buttons.forEach(function(button) {
//     button.addEventListener("click", handleClick)});

let buttons = document.querySelectorAll(".drum").length;
function handleClick(){
        alert("I got clicked!")
    }
for(let i=0; i<buttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}


// document.querySelector("").addEventListener("click",handleClick);