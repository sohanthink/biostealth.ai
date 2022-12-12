const videoPlayer = document.querySelector('.video-player')
let video = videoPlayer.querySelector('.video')
let vid = document.getElementById("my_video");
const playBtn = videoPlayer.querySelector('.play-button')
const playButton = videoPlayer.querySelector('video')
const volume = videoPlayer.querySelector('.volume')
const currentTimeElement = videoPlayer.querySelector('.current')
const durationTimeElement = videoPlayer.querySelector('.duration')
const progress = videoPlayer.querySelector('.video-progress')
const progressBar = videoPlayer.querySelector('.video-progress-filled')
let fullscreenbtn = document.getElementById("fullscreenbtn");
fullscreenbtn.addEventListener("click", toggleFullScreen, false);


//Play and Pause button
playButton.addEventListener('click', (e) => {
    if (video.paused) {
        video.play()
        playBtn.textContent = 'âš âš'
    } else {
        video.pause()
        playBtn.textContent = 'â–º'
    }
})
playBtn.addEventListener('click', (e) => {
    if (video.paused) {
        video.play()
        e.target.textContent = 'âš âš'
    } else {
        video.pause()
        e.target.textContent = 'â–º'
    }
})

//volume
volume.addEventListener('mousemove', (e) => {
    video.volume = e.target.value
})

//current time and duration
const currentTime = () => {
    let currentMinutes = Math.floor(video.currentTime / 60)
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
    let durationMinutes = Math.floor(video.duration / 60)
    let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

    currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`
    durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`
}

video.addEventListener('timeupdate', currentTime)


//Progress bar
video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100
    progressBar.style.width = `${percentage}%`
})

//change progress bar on click
progress.addEventListener('click', (e) => {
    const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = progressTime
})

function toggleFullScreen() {
    if (vid.requestFullScreen) {
        vid.requestFullScreen();
    } else if (vid.webkitRequestFullScreen) {
        vid.webkitRequestFullScreen();
    } else if (vid.mozRequestFullScreen) {
        vid.mozRequestFullScreen();
    }
}


$('#audio-control').click(function () {
    if ($("#my_video").prop('muted')) {
        $("#my_video").prop('muted', false);
        $(this).html('<i class="fas fa-volume-up"></i>');
        // or toggle class, style it with a volume icon sprite, change background-position
    } else {
        $("#my_video").prop('muted', true);
        $(this).html("<i class='fas fa-volume-mute'></i>");
    }
});