const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const mic = document.querySelector('#mic');
const content = document.querySelector('#content');
const status = document.querySelector(".device-status");
const statusText = document.querySelector(".device-status").innerHTML;
let messenger = document.querySelector(".message");

//Mic was clicked and device stopped listening
mic.onclick = () => {
    recognition.start();
    mic.style.backgroundColor = "rgba(94, 187, 94, 0.671)";
}
//Device stopped listening
recognition.onend = function () {
    recognition.stop();
    status.innerHTML = "Your device stopped listening!"
    mic.style.backgroundColor = "red";
}

//Result of speech recognition 
recognition.onresult = (event) => {
    const color = event.results[0][0].transcript;
    content.style.backgroundColor = color;
    messenger.innerHTML = `I heard you say : "${event.results[0][0].transcript.toUpperCase()}!"  `;
}

//Device cannot make a match - "onnomatch" Method does not work on Firefox
recognition.onnomatch = function () {
       console.log('Speech not recognised');
   }