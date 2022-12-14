export default class ModuleInfoShow {
    constructor(trigger) {
        this.btns = document.querySelectorAll(trigger);
    }

    showtext() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const sibling = btn.parentNode.nextElementSibling;
                sibling.classList.add('animated');
                sibling.classList.toggle('msg');
                sibling.style.marginTop = '20px';
                sibling.classList.add('fadeInDown');

            });
        })

    }

}