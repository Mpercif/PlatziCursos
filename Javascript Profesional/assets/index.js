import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector('video');
const play  = document.querySelector('#play');
const mute  = document.querySelector('#mute');

const player = new MediaPlayer({el: video, plugins: [new AutoPlay]})


play.addEventListener('click', ()=>{
    player.play()
})

mute.addEventListener('click', ()=>{
    player.sound()
})

