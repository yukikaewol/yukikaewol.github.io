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

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "ko-KR";
recognition.continuous = true;
recognition.maxAlternatives = 10000;

let p = document.createElement("p");
p.classList.add("para");

let words = document.querySelector(".words");
words.appendChild(p);

let speechToText = "";
recognition.addEventListener("result", (e) => {
  let interimTranscript = "";
  for (let i = e.resultIndex, len = e.results.length; i < len; i++) {
    let transcript = e.results[i][0].transcript;
	
	
	let j = 0;
	for (j = transcript.length - 1; j >= 0; j--) {
		if (transcript[j] == ' ') {
			break;
		}
	}
	let one_word = transcript.slice(j+1, transcript.length);
	console.log(one_word);
	if (one_word == "해줘") {
		audio.play();
	}
	else if (one_word == "멈춰") {
		audio.pause();
	}
	else if (one_word == "돌아가") {
		audio.load();
	}
	
	
    if (e.results[i].isFinal) {
      speechToText += transcript;
    } else {
      interimTranscript += transcript;
    }
  }
  document.querySelector(".para").innerHTML = speechToText + interimTranscript;
});

recognition.start();