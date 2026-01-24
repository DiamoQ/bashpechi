const STORAGE_KEY = 'selectedCity';
const rootSelector = '[data-js-city-current]';

class HeaderCityLabel {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.init();
    }

    init() {
        // выставить значение на старте
        this.applyFromStorage();

        // слушать изменения из модалки
        document.addEventListener('city:change', (e) => {
            const city = e.detail;
            if (city?.label) this.setLabel(city.label);
        });

        // если поменяли в другой вкладке
        window.addEventListener('storage', (e) => {
            if (e.key !== STORAGE_KEY) return;
            this.applyFromStorage();
        });
    }

    applyFromStorage() {
        const saved = this.readFromStorage();
        if (saved?.label) this.setLabel(saved.label);
    }

    setLabel(label) {
        const el = this.rootElement;

        if (el.textContent.trim() === label) return;

        el.classList.add('is-changing');

        requestAnimationFrame(() => {
            setTimeout(() => {
                el.textContent = label;

                el.classList.remove('is-changing');
            }, 180);
        });
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

class HeaderCityLabelCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new HeaderCityLabel(element);
        });
    }
}

export default HeaderCityLabelCollection;
