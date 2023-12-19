export class Button {
    label = 'Default';


    /**
     * 
     * @param {HTMLElement} element 
     */

    appendTo(element){
        this.button = document.createElement('button');
        this.button.classList.add('buttonScene');
        this.button.innerText = this.label;
        this.button.addEventListener('click', this.onClick.bind(this));
        element.appendChild(this.button);
    }

    onClick ()  {
        throw new Error('La méthode onClick doit être implémentée');
    }

    active(enabled ) {
        if (enabled) {
            this.button.classList.add('active');
        } else {
            this.button.classList.remove('active');
        }
    }
}