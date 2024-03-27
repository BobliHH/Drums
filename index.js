const buttons = document.querySelectorAll(".drum");
function handleClick(){
    alert(" I got clicked!")
}
buttons.forEach(function(button) {
    button.addEventListener("click", handleClick)})
// document.querySelector("").addEventListener("click",handleClick);