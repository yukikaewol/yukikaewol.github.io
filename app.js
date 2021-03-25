
let audio_src = document.getElementById("audio").getAttribute("src");
let audio = new Audio(audio_src);

let isClickedOnce = false;
function click_play() {
    if (isClickedOnce) {
        return null;
    }
    audio.play();
    isClickedOnce = true;
}
audio.addEventListener("ended", function () {
    window.open("about:blank", "_self").close();
});