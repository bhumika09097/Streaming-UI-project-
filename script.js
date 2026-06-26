const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const title = document.getElementById("title")
const artist = document.getElementById("artist")


// Play / Pause
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
});

// Update progress bar while song plays
audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.value = percent;

    currentTimeEl.textContent = formatTime(audio.currentTime);
});

// Seek when user drags progress bar
progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
});

const volumeSlider = document.getElementById("volume");
const volumeIcon = document.querySelector(".volume span");

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;

    if (volumeSlider.value == 0) {
        volumeIcon.textContent = "🔇";
    } else if (volumeSlider.value < 50) {
        volumeIcon.textContent = "🔉";
    } else {
        volumeIcon.textContent = "🔊";
    }
});


const songs = [
    {
        title : "Blinding Lights",
        artist : "The Weeknd",
        src : "music/music1.mp3"
        },
    
    {
        title : "Shape of you",
        artist : "Ed Sheeren",
        src : "music/music2.mp3"
        },
    {
        title : "Believer",
        artist : "Imagine Dragons",
        src : "music/music3.mp3"
        },
    {
        title : "Perfect",
        artist : "Ed Sheeren",
        src : "music/music4.mp3"
        },
    {
        title : "Faded",
        artist : "Alean Walker",
        src : "music/music5.mp3"
        }
]

function loadSong(index) {
    audio.src = songs[index].src;
    title.textContent = songs[index].title;
    artist.textContent = songs[index].artist;
}

let currentSong = 0;
loadSong(currentSong)

const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")

nextBtn.addEventListener("click", () => {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();
    playBtn.textContent = "⏸";
});

prevBtn.addEventListener("click", () => {
    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    audio.play();
    playBtn.textContent = "⏸";
});

audio.addEventListener("ended", () => {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();
});



