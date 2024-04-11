// const buttons = document.querySelectorAll(".drum");
// function handleClick(){
//     alert("I got clicked!")
// }
// buttons.forEach(function(button) {
//     button.addEventListener("click", handleClick)});

//DETECTING BUTTON PRESS
let buttons = document.querySelectorAll(".drum").length;

function handleClick(){ 

    let buttonInnerHTML =this.innerHTML;
    handleKey(buttonInnerHTML);}

for(let i=0; i<buttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}


// DETECTING KEY PRESS
document.addEventListener("keydown",function(event){
    
    console.log(event)
    handleKey(event.key)
    
})

function handleKey(key){

   
    switch (key) {
        case "w":
            let tom1 = new Audio(`./sounds/tom-1.mp3`);
            tom1.play();
            break;

        case "a":
        let tom2 = new Audio(`./sounds/tom-2.mp3`);
        tom2.play();
            break;
        
            case "s":
                let tom3 = new Audio(`./sounds/tom-3.mp3`);
                tom3.play();
                    break;    

                    case "d":
                        let tom4 = new Audio(`./sounds/tom-4.mp3`);
                        tom4.play();
                            break;  

                            case "j":
        let snare = new Audio(`./sounds/snare.mp3`);
        snare.play();
            break;   
            
            case "k":
        let crash = new Audio(`./sounds/crash.mp3`);
        crash.play();
            break;

            case "l":
        let kick = new Audio(`./sounds/kick-bass.mp3`);
        kick.play();
            break;

    
        default: console.log("buttonInnerHTML")
            break;
    }}