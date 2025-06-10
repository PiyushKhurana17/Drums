var listOfButtons= document.querySelectorAll(".drum");
for (var i = 0; i < listOfButtons.length; i++){
    listOfButtons[i].addEventListener("click", function(){
        var drumInnerHTML = this.innerHTML;
        makeSound(drumInnerHTML);
        buttonAnimation(drumInnerHTML);
})
}

document.addEventListener("keydown",function(event){
    keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
})

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("sounds/tr909-kick-drum-241402.mp3");
            audio.play();
            break;
        
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "e":
            var audio = new Audio("sounds/hi-hat-8-231040.mp3");
            audio.play();
            break;

        default:
            console.log(key);
    }
}

function buttonAnimation(current_key){
    var activeButton = document.querySelector("."+current_key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}



/* var audio = new Audio("sounds/crash.mp3");
audio.play(); */