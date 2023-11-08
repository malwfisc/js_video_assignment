var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	const video = document.getElementById('player1');
    video.autoplay = false;
    video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	const video = document.getElementById('player1');
    video.play();

    // Update the volume information
    const volumeSlider = document.getElementById('slider');
    const volumeValue = document.getElementById('volume');
    volumeSlider.value = video.volume * 100;
    volumeValue.textContent = volumeSlider.value + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    
    // Pause the video
    const video = document.getElementById('player1');
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down Video");
    
    // Slow down the video speed by 10%
    const video = document.getElementById('player1');
    video.playbackRate -= 0.1;
    console.log("New video speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up Video");
    
    // Speed up the video proportionally to slow down
    const video = document.getElementById('player1');
    video.playbackRate += 0.1;
    console.log("New video speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");

    // Skip ahead by 10 seconds
    const video = document.getElementById('player1');
    video.currentTime += 10;

    // If video length has been exceeded, go back to the start
    if (video.currentTime > video.duration) {
        video.currentTime = 0;
    }
    
    console.log("Current location of the video: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    // Mute/unmute the video and update the text in the button
    const video = document.getElementById('player1');
    const muteButton = document.getElementById('mute');
    
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = 'Mute';
    } else {
        video.muted = true;
        muteButton.textContent = 'Unmute';
    }
});

document.getElementById('slider').addEventListener('input', function() {
    // Change the volume based on the slider and update the volume information
    const video = document.getElementById('player1');
    const volumeSlider = document.getElementById('slider');
    const volumeValue = document.getElementById('volume');
    
    video.volume = volumeSlider.value / 100;
    volumeValue.textContent = volumeSlider.value + '%';
});

document.querySelector("#vintage").addEventListener("click", function() {
    // Utilize the existing oldSchool class on the video element
    const video = document.getElementById('player1');
    video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
    // Remove the oldSchool class from the video element
    const video = document.getElementById('player1');
    video.classList.remove('oldSchool');
});
