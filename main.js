var audio = document.getElementById("audioPlayer");
var playBtn = document.querySelector(".play-btn");
var playIcon = document.querySelector(".play-icon");
var pauseIcon = document.querySelector(".pause-icon");

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }

  updatePlayPauseIcons();
}

function updatePlayPauseIcons() {
  var isPlaying = !audio.paused;

  if (isPlaying) {
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline";
  } else {
    playIcon.style.display = "inline";
    pauseIcon.style.display = "none";
  }
}

audio.addEventListener("timeupdate", function () {
  var percent = (audio.currentTime / audio.duration) * 100;
  document.getElementById("progress").style.width = percent + "%";
});

audio.addEventListener("ended", function () {
  updatePlayPauseIcons(); // Reiniciar icono cuando la reproducción finaliza
});