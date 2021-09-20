
var elements = document.querySelectorAll(".drum");
for(let i=0;i<elements.length;i++){
    elements[i].addEventListener("click",handleClick);
}
//detecting buttoon press
function handleClick(){
    var audio = new Audio('sounds/' + this.innerHTML + '.mp3');
    audio.play();
    animation(this.innerHTML);
}
document.addEventListener("keypress",keyPressed);

function keyPressed(event){
    var audio = new Audio('sounds/' + event.key + '.mp3');
    audio.play();
    animation(event.key);

} 

function animation(currentKey)
{
    var buttonPressed = document.querySelector("." + currentKey);
    buttonPressed.classList.add("pressed");
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    },100);

}