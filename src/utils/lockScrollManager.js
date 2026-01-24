class LockScrollManager {
    constructor() {
        this.lockCounter = 0;
        this.className = 'is-lock';
        this.element = document.getElementsByTagName('body')[0];
    }

    lock() {
        this.lockCounter++;
        if (this.lockCounter === 1) {
            this.element.classList.add(this.className);
        }
    }

    unlock() {
        if (this.lockCounter > 0) {
            this.lockCounter--;
            if (this.lockCounter === 0) {
                this.element.classList.remove(this.className);
            }
        }
    }

    reset() {
        this.lockCounter = 0;
        this.element.classList.remove(this.className);
    }
}

export default new LockScrollManager();
