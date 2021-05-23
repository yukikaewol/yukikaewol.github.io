let audio_src = document.getElementById("audio").getAttribute("src");
let audio = new Audio(audio_src);

let isPlayed = false;
function click_play() {
    if (isPlayed) {
        audio.pause();
        isPlayed = false
    }
    else {
        audio.play();
        isPlayed = true;
    }
}
audio.addEventListener("ended", function () {
    window.open("about:blank", "_self").close();
});