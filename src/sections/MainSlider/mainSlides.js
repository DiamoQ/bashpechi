const basePath = import.meta.env.MODE === 'production'
    ? `${import.meta.env.VITE_PUBLIC_PATH}/images/main-slider`
    : '/images/main-slider'

const mobileMainSlideBanner1 = `${basePath}/bg-mobile.png`;
const desktopMainSlideBanner1 = `${basePath}/bg.png`;

const mainSlides = [
    {
        label: "Хит продаж",
        title: [
            "Чугунные печи",
            "для бани и сауны",
            "Атмосфера",
        ],
        text: [
            "Эстетика технологий,",
            "воплощенная в чугуне",
        ],
        href: "#",
        mobileBanner: mobileMainSlideBanner1,
        desktopBanner: desktopMainSlideBanner1,
    },
    {
        label: 'Популярное',
        title: [
            "Чугунные печи",
            "для бани и сауны Атмосфера",
            "Атмосфера",
        ],
        text: [
            "Эстетика технологий,",
            "воплощенная в чугуне",
        ],
        href: "#",
        mobileBanner: mobileMainSlideBanner1,
        desktopBanner: desktopMainSlideBanner1,
    },
    {
        label: 'Новинка',
        title: [
            "Чугунные печи",
            "для бани и сауны Атмосфера",
            "Атмосфера",
        ],
        text: [
            "Эстетика технологий,",
            "воплощенная в чугуне",
        ],
        href: "#",
        mobileBanner: mobileMainSlideBanner1,
        desktopBanner: desktopMainSlideBanner1,
    },
]

export default mainSlides;