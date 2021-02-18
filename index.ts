import MediaPlayer from "./MediaPlayer";
import AutoPlay from './pluggins/AutoPlay'
import autoPause from './pluggins/autoPause'

const video = document.querySelector('video');
const button = document.querySelector("button");
const mute = document.querySelector("#mute");

const player = new MediaPlayer({ el: video, pluggins: [
    new AutoPlay(), new autoPause()
] });
button.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();

if("serviceWorker" in navigator) {
    navigator.serviceWorker.register('../Curso_profesional_de_js/sw.ts').catch(error => {
        console.log(error.message);
    })
}