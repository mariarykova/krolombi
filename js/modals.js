function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if(e.target) {
                e.preventDefault();
            }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        item.classList.add('hide');
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
        trigger.forEach(item => {
            item.classList.remove('hide');
        });
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "";
        }
    });
}

bindModal(".service__desc_button", ".modal__form", ".btn__close_modal");
bindModal(".book__button", ".modal__form", ".btn__close_modal");