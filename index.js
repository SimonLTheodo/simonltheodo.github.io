function setUpTimer(){
    const timer = document.getElementById("timer");
    increaseTimer(timer, -1)
}
function increaseTimer(element, prevtime){
    var text = " seconds have passed."
    if (prevtime == 0){
        text = " second has passed."
    }
    element.innerHTML = (prevtime + 1) + text
    setTimeout(function () {increaseTimer(element, prevtime+1);}, 1000);
}