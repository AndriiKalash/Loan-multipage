import VideoPlayer from './modules/playVideo';
import MainSlider from './modules/slider/main-slider';
import MiniSlider from './modules/slider/mini-slider';
import DifferenceList from './modules/diffrerenceList';
import Form from './modules/form'


window.addEventListener('DOMContentLoaded', () => {

    const mainSlider = new MainSlider({ //новый экземпляр класса
        btns: '.next',
        container: '.page'
    })
    mainSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    })
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    })
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
    })
    feedSlider.init();


    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

    const differenceListOld = new DifferenceList('.officerold');
    differenceListOld.init();
    const differenceListNew = new DifferenceList('.officernew');
    differenceListNew.init();

    new Form('.form').bindPostDats();



});