class CopyText {
    selectors = {
        copyTrigger: '[data-js-copy]',
    }

    stateClasses = {
        isCopied: 'is-copied',
        isError: 'is-copy-error',
    }

    options = {
        resetDelay: 1200,
    }

    constructor(root = document) {
        this.root = root;
        this.triggers = Array.from(
            this.root.querySelectorAll(this.selectors.copyTrigger)
        );

        if (!this.triggers.length) return;

        this.bindEvents();
    }

    onTriggerClick = async (event) => {
        const trigger = event.currentTarget;

        // если это <a> — не даём переходить
        if (trigger.tagName.toLowerCase() === 'a') {
            event.preventDefault();
        }

        const text =
            trigger.dataset.copy ??
            trigger.getAttribute('data-js-copy') ??
            trigger.textContent.trim();

        if (!text) return;

        try {
            await this.copyToClipboard(text);
            this.onSuccess(trigger);
        } catch (error) {
            this.onError(trigger, error);
        }
    }

    async copyToClipboard(text) {
        if (navigator.clipboard?.writeText) {
            return navigator.clipboard.writeText(text);
        }

        // fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';

        document.body.appendChild(textarea);
        textarea.select();

        const success = document.execCommand('copy');
        document.body.removeChild(textarea);

        if (!success) {
            throw new Error('Copy failed');
        }
    }

    onSuccess(element) {
        element.classList.add(this.stateClasses.isCopied);

        const originalText = element.textContent;
        const successText = element.dataset.copySuccess ?? 'Скопировано';

        element.textContent = successText;

        window.setTimeout(() => {
            element.classList.remove(this.stateClasses.isCopied);
            element.textContent = originalText;
        }, this.options.resetDelay);
    }

    onError(element, error) {
        console.error(error);
        element.classList.add(this.stateClasses.isError);

        window.setTimeout(() => {
            element.classList.remove(this.stateClasses.isError);
        }, this.options.resetDelay);
    }

    bindEvents() {
        this.triggers.forEach((trigger) => {
            trigger.addEventListener('click', this.onTriggerClick);
        });
    }
}

export default CopyText;
