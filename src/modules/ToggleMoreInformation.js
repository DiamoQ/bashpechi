import OverlayMenu from "@/modules/OverlayMenu";

class ToggleMoreInformation {
    selectors = {
        root: '[data-js-more]',
        trigger: '[data-js-more-trigger]',
    };

    stateClasses = {
        isOpen: 'is-open',
    };

    // дефолтные тексты
    labels = {
        open: 'Скрыть',
        close: 'Подробнее',
    };

    constructor(rootElement = document) {
        this.rootElement = rootElement;

        this.bindEvents();
    }

    // Находим кнопку (или её родителей) по селектору
    getTriggerFromEventTarget = (target) => {
        return target.closest(this.selectors.trigger);
    };

    // Находим контент по aria-controls
    getContentByTrigger = (triggerElement) => {
        const targetId = triggerElement.getAttribute('aria-controls');
        if (!targetId) return null;

        return document.getElementById(targetId);
    };

    // Обновляем aria и текст
    syncUI = (triggerElement, contentElement, isOpen) => {
        triggerElement.setAttribute('aria-expanded', String(isOpen));

        // можно переопределять через data-атрибуты на кнопке
        const openLabel = triggerElement.dataset.labelOpen || this.labels.open;
        const closeLabel = triggerElement.dataset.labelClose || this.labels.close;

        triggerElement.textContent = isOpen ? openLabel : closeLabel;

        // опционально: aria-hidden на контент
        contentElement.setAttribute('aria-hidden', String(!isOpen));
    };

    toggle = (triggerElement) => {
        const contentElement = this.getContentByTrigger(triggerElement);
        if (!contentElement) return;

        const isOpen = contentElement.classList.toggle(this.stateClasses.isOpen);
        this.syncUI(triggerElement, contentElement, isOpen);
    };

    onDocumentClick = (e) => {
        const triggerElement = this.getTriggerFromEventTarget(e.target);
        if (!triggerElement) return;

        // если rootElement не document, ограничим область
        if (this.rootElement !== document && !this.rootElement.contains(triggerElement)) return;

        this.toggle(triggerElement);
    };

    bindEvents() {
        // делегирование: один обработчик, сколько бы кнопок ни было
        document.addEventListener('click', this.onDocumentClick);
    }

    destroy() {
        document.removeEventListener('click', this.onDocumentClick);
    }
}

export default ToggleMoreInformation;