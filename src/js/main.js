import VideoPlayer from './modules/playVideo';
import Slider from './modules/sliders'

window.addEventListener('DOMContentLoaded', () => {
    //создал экземпля класса
    const slider = new Slider('.page', '.next');
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();



});