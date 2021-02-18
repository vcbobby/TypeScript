import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from './pluggins/AutoPlay.js'

const video = document.querySelector('video');
const button = document.querySelector("button");
const mute = document.querySelector(".mute");

const player = new MediaPlayer({ el: video, pluggins: [
    //new AutoPlay()
] });
button.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();