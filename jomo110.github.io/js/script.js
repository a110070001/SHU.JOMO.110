document.addEventListener("DOMContentLoaded", function() {
    var videoSelect = document.getElementById("videoSelect");
    var video = document.getElementById("video");
    var videoSource = document.getElementById("videoSource");

    videoSelect.addEventListener("change", function() {
        var selectedVideo = videoSelect.value;
        videoSource.src = selectedVideo;
        video.load();
    });

    var playBtn = document.getElementById("playBtn");
    var pauseBtn = document.getElementById("pauseBtn");

    playBtn.addEventListener("click", function() {
        video.play();
    });

    pauseBtn.addEventListener("click", function() {
        video.pause();
    });
});
