export default class DifferenceList {
    constructor(parentSelector) {

        this.parent = document.querySelector(parentSelector);
        this.cards = this.parent.children;
        this.btn = this.parent.querySelector('.plus');
        this.cardIndex = 0;

        this.cards[this.cards.length - 1].classList.add('animated', 'fadeInDown');
    }

    hideCard() {
        this.cards.forEach(card => {
            if (!card.lastElementChild.matches('div .card__click') &&
                !card.matches('.officer__card-title')) {
                card.style.display = 'none';
                card.classList.add('animated', 'fadeInDown');
            }
        });
    }

    addCard() {
        this.cardIndex++;
        this.cards[this.cardIndex].style.display = 'flex';
        if (this.cardIndex == this.cards.length - 2) {
            this.cards[this.cards.length - 1].remove();
        }
    }

    init() {

        this.hideCard();
        this.btn.addEventListener('click', () => this.addCard());
    }
}