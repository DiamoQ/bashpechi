const STORAGE_KEY = 'selectedCity';

const rootSelector = '[data-js-choose-city]';

class ChooseCity {
    selectors = {
        option: '[data-js-choose-city-option]',
        name: '.choose-city-modal__name',
    };

    activeClass = 'is-active';

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.options = [...this.rootElement.querySelectorAll(this.selectors.option)];
        if (!this.options.length) return;

        this.init();
    }

    init() {
        this.restoreActiveFromStorage();
        this.bindEvents();
    }

    bindEvents() {
        this.options.forEach((option) => {
            option.addEventListener('click', () => {
                const city = this.getCityFromOption(option);
                if (!city) return;

                this.saveToStorage(city);
                this.setActive(city.id);

                document.dispatchEvent(new CustomEvent('city:change', { detail: city }));
            });
        });
    }

    getCityFromOption(option) {
        const id = option.dataset.cityId;
        if (!id) return null;

        const label =
            option.querySelector(this.selectors.name)?.textContent.trim() ||
            option.textContent.trim();

        return { id, label };
    }

    setActive(cityId) {
        this.options.forEach((option) => {
            const isActive = option.dataset.cityId === cityId;
            option.classList.toggle(this.activeClass, isActive);
            option.setAttribute('aria-selected', String(isActive));
        });
    }

    saveToStorage(city) {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                id: city.id,
                label: city.label,
                updatedAt: Date.now(),
            }),
        );
    }

    restoreActiveFromStorage() {
        const saved = this.readFromStorage();
        if (saved?.id) this.setActive(saved.id);
    }

    readFromStorage() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        try {
            return JSON.parse(raw);
        } catch {
            return null;
        }
    }
}

class ChooseCityCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new ChooseCity(element);
        });
    }
}

export default ChooseCityCollection;
