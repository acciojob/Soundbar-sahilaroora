//your JS code here. If required.
// script.js
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.getElementById('buttons');
const audios = {};

sounds.forEach(sound => {
    // Create audio elements and preload them
    const audio = new Audio(`sounds/${sound}.mp3`);
    audios[sound] = audio;

    // Create buttons for each sound
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        // Stop all sounds before playing a new one
        stopSounds();
        audios[sound].play();
    });

    buttons.appendChild(btn);
});

// Create a stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop Sounds';
stopBtn.addEventListener('click', stopSounds);
buttons.appendChild(stopBtn);

function stopSounds() {
    // Pause and reset all audio elements
    for (const key in audios) {
        audios[key].pause();
        audios[key].currentTime = 0;
    }
}