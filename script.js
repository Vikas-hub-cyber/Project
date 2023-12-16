
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'mtoIb-zZA5s',
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    var playButton = document.getElementById("playButton");
    playButton.addEventListener("click", function () {
        if (player.getPlayerState() === YT.PlayerState.PLAYING) {
            player.pauseVideo();
            playButton.innerText = "Play";
        } else {
            player.playVideo();
            playButton.innerText = "Pause";
        }
    });

    var volumeSlider = document.getElementById("volume");
    volumeSlider.addEventListener("input", function () {
        player.setVolume(volumeSlider.value);
    });
}
