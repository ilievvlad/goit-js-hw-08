import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load } from './storage';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
	save(LOCALSTORAGE_KEY, seconds);
}

player.setCurrentTime(load(LOCALSTORAGE_KEY));
