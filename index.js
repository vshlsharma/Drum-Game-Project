var len = document.querySelectorAll(".drum").length;
var file;
for(var i=0;i<len;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
         var test = this.innerHTML;
         makeSound(test);
         animation(test);
    });
}

// for keyboard opertaions 
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animation(event.key);
})

// function for making different different sounds 
function makeSound(key){
         switch(key){
            case 'w':
                file="tom-4.mp3";
                var audio = new Audio(file);
                audio.play();
                break;
            case 'a':
                file="tom-3.mp3";
                var audio = new Audio(file);
                audio.play();
            case 's':
                file="tom-2.mp3";
                var audio = new Audio(file);
                audio.play();
                break;
            case 'd':
                file="tom-1.mp3";
                var audio = new Audio(file);
                audio.play();
                break;
            case 'j':
                file="kick-bass.mp3";
                var audio = new Audio(file);
                audio.play();
                break;
            case 'k':
                file="snare.mp3";
                var audio = new Audio(file);
                audio.play();
                break;
            case 'l':
                file="crash.mp3";
                var audio = new Audio(file);
                audio.play();
                break;
         }
}
animation();
function animation(cls){
    var btn = document.querySelector("."+cls);
    btn.classList.add("pressed");
    setTimeout(function(){
        btn.classList.remove("pressed")
    },100);

    
}



    
