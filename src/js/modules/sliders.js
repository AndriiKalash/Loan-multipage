export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.slides = this.page.children; //коллекция слайдов
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;

    }

    showSlides() {
        if (this.slideIndex > this.slides.length) {
            this.slideIndex = 1;
        }

        if (this.slideIndex < 1) {
            this.slideIndex = this.slides.length;
        }
        //  modal show
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

    render() {

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

        this.showSlides();


    }

}
