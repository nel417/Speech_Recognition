const msgEl = document.getElementById('msg');

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

function onSpeak(e) {
    const msg = e.results[0][0].transcript;

    writeMessage(msg);
}

function writeMessage(msg) {
    msgEl.innerHTML = `
    <div>You said: </div>
    <span class="box">${msg}</span>
  `;
}

recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start());