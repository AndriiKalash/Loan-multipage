export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = document.querySelector('.close');
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                // чтоб плеер не пересоздавался при выходе из модалки
                if (document.querySelector('iframe#frame')) { // div меняется на iframe при первой загрузке видео
                    this.overlay.style.display = 'flex';
                } else {
                    const path = btn.getAttribute('data-url');//ссылка это значение атрибута на каждой кнопке
                    this.createPlayer(path);
                }

            });
        });
    }

    bindCloseBtn() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });
    }

    createPlayer(url) { //ф-ция создание плеера из API
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
        });
        console.log(this.player);
        this.overlay.style.display = 'flex';
    }

    init() { // подключение скрипта из youtube API
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindCloseBtn();
    }

}