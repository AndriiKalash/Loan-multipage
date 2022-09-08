export default class Slider { //класс прототип 
    constructor({ container = null,
        btns = null,
        prev = null,
        next = null,
        activeClass = '',
        animate,
        autoplay,
    } = {}) { //деструктуризация

        this.container = document.querySelector(container);
        this.slides = this.container.children; //коллекция слайдов
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
}
