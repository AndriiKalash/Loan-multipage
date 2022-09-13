import Slider from './sliders';

export default class MiniSlider extends Slider { //наследуется от Slider
    constructor(container, prev, next, activeClass, animate, autoplay) {
        super(container, prev, next, activeClass, animate, autoplay);
    }

    //класс активности 
    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
        }

        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    //переключение слайдов

    nextSlide() {
        if (this.prev.parentNode === this.container) {
            // this.container.insertBefore(this.slides[0], this.prev);
            this.prev.before(this.slides[0]);
        } else {
            // this.container.appendChild(this.slides[0]);
            this.container.append(this.slides[0]);
        }
        this.decorizeSlides();
    }

    nextSlideAuto() {
        let paused = setInterval(() => {
            this.nextSlide()
        }, 3000);
        this.container.addEventListener('mouseenter', () => {
            clearInterval(paused);
        });
        this.next.addEventListener('mouseenter', () => {
            clearInterval(paused);
        });
        this.prev.addEventListener('mouseenter', () => {
            clearInterval(paused);
        });
    }

    bindTriger() {
        this.next.addEventListener('click', () => this.nextSlide());

        this.prev.addEventListener('click', () => {

            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== 'BUTTON') {
                    let active = this.slides[i];
                    this.slides[0].before(active);
                    this.decorizeSlides();
                    break;
                }
            }
        });
    }

    init() {
        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;   
      `;
            this.bindTriger();

            this.decorizeSlides();

            if (this.autoplay) {
                this.nextSlideAuto();
                this.container.addEventListener('mouseleave', () => {
                    this.nextSlideAuto();
                });
                this.next.addEventListener('mouseleave', () => {
                    this.nextSlideAuto();
                });
                this.prev.addEventListener('mouseleave', () => {
                    this.nextSlideAuto();
                });
            }
        } catch (error) {

        }

    }
}