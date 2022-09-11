export default class Form {
    constructor(forms) {

        this.forms = document.querySelectorAll(forms);
        this.message = {
            loading: '../../assets/img/form/spinner.svg',
            ladingtext: 'Идет отправка данных',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...'
        };
    }

    async postData(url, data) {  // постинг данных для form
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        return await res.json();
    };

    checkMailInputs() { //валидация для email inputs
        const mailInputs = document.querySelectorAll('[type="email"]');
        mailInputs.forEach(input => {
            input.addEventListener('keypress', function (e) {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        });
    };

    bindPostDats() {
        this.checkMailInputs();

        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                // img for loading:
                const statusMessage = document.createElement('img');
                statusMessage.src = this.message.loading;
                statusMessage.style.cssText = `position: absolute;
                                               right: 180px;
                                               bottom: 30px;
                                               width: 150px;
                                               height: 150px;                    
                                            `;
                form.parentNode.appendChild(statusMessage);

                // div for status message:
                const statusMessageDone = document.createElement('div');
                statusMessageDone.style.cssText = `
                           margin-top: 15px;
                           color : grey;
                           font-size: 30px;
        `;
                form.insertAdjacentElement('afterend', statusMessageDone);
                statusMessageDone.textContent = this.message.ladingtext;

                const formData = new FormData(form);  // принимает данные с формы
                const json = JSON.stringify(Object.fromEntries(formData.entries()));// в json

                this.postData("https://631d8c8fcc652771a4875497.mockapi.io/getForm", json)
                    .then(data => {
                        console.log(data);
                        statusMessageDone.textContent = this.message.success;
                        statusMessage.remove();
                    }).catch(() => {
                        statusMessageDone.textContent = this.message.failure;
                    }).finally(() => {
                        form.reset();
                        setTimeout(() => {
                            statusMessageDone.remove();
                        }, 4000);
                    });
            });
        });
    }


}