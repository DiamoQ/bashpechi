import getParams from "@/utils/getParams";
import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

const rootCollector = "[data-js-slider]";

class Slider {
    selectors = {
        root: rootCollector,
        swiper: "[data-js-slider-swiper]",
        navigation: "[data-js-slider-navigation]",
        previousButton: "[data-js-slider-previous-button]",
        nextButton: "[data-js-slider-next-button]",
        pagination: "[data-js-slider-pagination]",
        scrollbar: "[data-js-slider-scrollbar]",
    };

    constructor(rootElement) {
        this.rootElement = rootElement;

        this.swiperElement = this.rootElement.querySelector(this.selectors.swiper);
        if (!this.swiperElement) return;

        this.params = getParams(this.rootElement, this.selectors.root);

        // Если навигация вынесена наружу через id — берём её по id.
        // Иначе ищем навигацию / пагинацию / скроллбар ТОЛЬКО этого слайдера,
        // а не вложенных.
        this.navigationElement = this.params.navigationTargetElementId
            ? document.getElementById(this.params.navigationTargetElementId)
            : this.getOwnElement(this.selectors.navigation);

        this.paginationElement = this.getOwnElement(this.selectors.pagination);
        this.scrollbarElement = this.getOwnElement(this.selectors.scrollbar);

        this.previousButtonElement = this.navigationElement?.querySelector(this.selectors.previousButton) || null;
        this.nextButtonElement = this.navigationElement?.querySelector(this.selectors.nextButton) || null;

        this.init();
    }

    /**
     * Возвращает элемент внутри rootElement, который принадлежит ИМЕННО ЭТОМУ слайдеру,
     * а не вложенному (по closest(rootCollector)).
     */
    getOwnElement(selector) {
        const candidates = this.rootElement.querySelectorAll(selector);
        for (const el of candidates) {
            if (el.closest(rootCollector) === this.rootElement) return el;
        }
        return null;
    }

    init() {
        const swiperConfig = {
            ...this.params.sliderParams,
            modules: [Navigation, Pagination, Scrollbar, Autoplay],
        };

        // Navigation — только если реально есть кнопки
        if (this.previousButtonElement && this.nextButtonElement) {
            swiperConfig.navigation = {
                prevEl: this.previousButtonElement,
                nextEl: this.nextButtonElement,
            };
        }

        // Pagination — только если элемент существует
        if (this.paginationElement) {
            swiperConfig.pagination = {
                el: this.paginationElement,
                bulletClass: "slider-navigation__pagination-bullet",
                bulletActiveClass: "is-active",
                clickable: true,
            };
        }

        // Scrollbar — только если элемент существует
        if (this.scrollbarElement) {
            swiperConfig.scrollbar = {
                el: this.scrollbarElement,
                dragClass: "slider__scrollbar-drag",
                draggable: true,
            };
        }

        this.swiper = new Swiper(this.swiperElement, swiperConfig);
    }
}

class SliderCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootCollector).forEach((element) => {
            new Slider(element);
        });
    }
}

export default SliderCollection;
