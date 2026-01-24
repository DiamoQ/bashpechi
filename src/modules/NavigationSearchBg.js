import LockScrollManager from '@/utils/LockScrollManager';

class NavigationSearchBg {
    selectors = {
        wrapper: '[data-js-navigation-wrapper]',
        input: '[data-js-navigation-search-input]',
        mobileBtn: '[data-search-button="search-window"]',
    };

    stateClasses = {
        isActive: 'is-active',
    };

    constructor() {
        this.wrapper = document.querySelector(this.selectors.wrapper);
        this.input = document.querySelector(this.selectors.input);
        this.mobileBtn = document.querySelector(this.selectors.mobileBtn);

        if (!this.wrapper || !this.input) return;

        this.bg = this.wrapper.querySelector('.navigation__search-bg');
        if (!this.bg) {
            this.bg = document.createElement('div');
            this.bg.className = 'navigation__search-bg';
            this.wrapper.appendChild(this.bg);
        }

        // защита от дублей
        this.isOpen = false;

        this.bindEvents();
    }

    open = () => {
        if (this.isOpen) return;                 // ✅ не дублируем
        this.isOpen = true;
        this.wrapper.classList.add(this.stateClasses.isActive);
        LockScrollManager.lock();
    };

    close = () => {
        if (!this.isOpen) return;                // ✅ не дублируем
        this.isOpen = false;
        this.wrapper.classList.remove(this.stateClasses.isActive);
        LockScrollManager.unlock();
    };

    bindEvents() {
        // основной toggle
        this.input.addEventListener('focus', this.open);
        this.input.addEventListener('blur', this.close);

        // клик по фону закрывает и снимает фокус
        this.bg.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            this.input.blur();
            this.close();
        });

        if (this.mobileBtn) {
            this.mobileBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                // если открываем — сначала активируем фон, потом фокус
                if (!this.isOpen) {
                    this.open();
                    this.input.focus()
                } else {
                    // если закрываем — blur и убираем фон
                    this.input.blur();
                    this.close();
                }
            });
        }

        // Esc закрывает
        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Escape') return;
            this.input.blur();
            this.close();
        });
    }
}

export default NavigationSearchBg;
