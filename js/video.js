



//Page Load-- initialize 'video' then turn off autoplay and looping
var video = document.querySelector("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.loop=false;
	video.autoplay=false;
	console.log("Loop is set to " + video.loop)
	console.log("Autoplay is set to " + video.autoplay)
});

//Play Button-- play and update volume info
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});

//Pause Button-- pause
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

//Slow Down-- slow by 10% each click and console log speed
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.9 * video.playbackRate;
	console.log("Slower playback rate: " + video.playbackRate);
});

//Speed Up-- speed each click and console log speed (prop rate^)
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = (1/0.9) * video.playbackRate;
	console.log("Faster playback rate: " + video.playbackRate);
});

//Skip Ahead-- 10 sec skip (or to start once ended)and console log location
document.querySelector("#skip").addEventListener("click", function() {
	total = video.duration;
	if (video.currentTime < (total - 10)){
		video.currentTime = video.currentTime + 10;
		console.log("Current time: " + video.currentTime);
	} else {
		video.currentTime = 0;
		console.log("Current time: " + video.currentTime);
	}
});

//Mute-- mute/unmute vid and update button text using inner HTML
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
});

//Volume Slider-- change based on slider and update volume info
document.querySelector("#slider").addEventListener("click", function() {
	var slider = document.getElementById("slider");
	document.querySelector("#volume").innerHTML = slider.value + "%";
	video.volume = (slider.value) / 100;
	console.log("Volume: " + video.volume);
});

//Styled-- use oldSchool class on vid element
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Vintage style");
});

//Original-- removeoldSchool class from vid
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original style");
});