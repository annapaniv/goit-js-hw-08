import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
console.log(iframe);
const player = new Player(iframe);
console.log(player);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

   
const onPlay = function (currentTime) {    
    const currentSec = currentTime.seconds;
   
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentSec));
    console.log(currentTime);
    };

player.on("timeupdate", throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
