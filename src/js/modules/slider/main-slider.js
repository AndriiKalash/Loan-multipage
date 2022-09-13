import Slider from './sliders';


export default class MainSlider extends Slider { //наследуется от Slider
    constructor(btns) {
        super(btns);
    }

    showSlides() {
        if (this.slideIndex > this.slides.length) {
            this.slideIndex = 1;
        }

        if (this.slideIndex < 1) {
            this.slideIndex = this.slides.length;
        }

        //  modal show на 3 основном слайде
        try {

            let divHanson = this.slides[2].querySelector('.hanson');
            divHanson.style.opacity = '0';// прячем
            divHanson.classList.add('animated');
            if (this.slideIndex === 3) {
                setTimeout(() => {
                    divHanson.style.opacity = '1';
                    divHanson.classList.add('slideInUp');
                }, 3000);
            } else {
                divHanson.classList.remove('slideInUp');
            }
        } catch (error) { }
        //  **************************************

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });
        this.slides[this.slideIndex - 1].style.display = 'block';

    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);
            });

            // клик на лого 
            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides();
            });
        });
        //доп кнопки на главном слайдере второй страницы
        document.querySelectorAll('.prevmodule').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1)
            })
        });
        document.querySelectorAll('.nextmodule').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();// так как всплытие происходит и на кнопке главной next 
                e.preventDefault();
                this.plusSlides(1)
            })
        });
    }

    render() {

        if (this.container) { //условие что действие происходит именно на данной странице
            this.bindTriggers();
            this.showSlides();
        }
    }
}