for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.getElementsByClassName("drum")[i].addEventListener("click",function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
        });
}
// function handleClick(){
//         var sound;
//          switch(this.innerHTML){
//              case "w":
//                  sound = new Audio("./sounds/tom-1.mp3");
//                  break;
//              case "a":
//                  sound = new Audio("./sounds/tom-2.mp3");
//                  break;
//              case "s":
//                  sound = new Audio("./sounds/tom-3.mp3");
//                  break;
//              case "d":
//                  sound = new Audio("./sounds/tom-4.mp3");
//                  break;
//              case "j":
//                  sound = new Audio("./sounds/snare.mp3");
//                  break;
//              case "k":
//                  sound = new Audio("./sounds/crash.mp3");
//                  break;
//              case "l":
//                  sound = new Audio("./sounds/kick-bass.mp3");
//                  break;
//              default: console.log(this.innerHTML);
//          }
//          sound.play();
//          //var sound = new Audio("./sounds/tom-1.mp3");
//          //sound.play();
     
// }
document.addEventListener("keydown",function (event){
    //console.log(event); event is obj having parameter key which contains the key which is pressed.
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    var sound;
    switch(key){
        case "w":
            sound = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            sound = new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
            sound = new Audio("./sounds/tom-3.mp3");
            break;
        case "d":
            sound = new Audio("./sounds/tom-4.mp3");
            break;
        case "j":
            sound = new Audio("./sounds/snare.mp3");
            break;
        case "k":
            sound = new Audio("./sounds/crash.mp3");
            break;
        case "l":
            sound = new Audio("./sounds/kick-bass.mp3");
            break;
        default: console.log("invalid keypress");
    }
    sound.play();
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },75);
}