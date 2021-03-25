let audio = new Audio("./law1.m4a");

let isClickedOnce = false;
function click_play() {
    if(isClickedOnce) {
        return null;
    }
    audio.play();
    isClickedOnce = true;
}

audio.addEventListener("ended", function() {
    window.open("about:blank", "_self").close();
});