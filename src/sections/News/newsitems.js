const sauny = '/src/assets/images/news/sauny.png';
const otlichie = '/src/assets/images/news/otlichie.png';
const vidy = '/src/assets/images/news/vidy.png';
const skidki = '/src/assets/images/news/skidki.png';

const basePath = import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PUBLIC_PATH
    : ''

const newsItems = [
    {
        title: "Подбираем освещение для бани и сауны",
        text: "Сегодня существует несколько видов банных печей, каждая из которых имеет свои особенности.",
        image: sauny,
        href: `${basePath}/sauny`,
    },{
        title: "Вопрос от клиента: Чем отличается баня от сауны",
        text: "Сегодня существует несколько видов банных печей, каждая из которых имеет свои особенности.",
        image: otlichie,
        href: `${basePath}/otlichie`,
    },{
        title: "Виды печей для бани: что лучше выбрать",
        text: "Сегодня существует несколько видов банных печей, каждая из которых имеет свои особенности.",
        image: vidy,
        href: `${basePath}/vidy`,
    },{
        title: "Скидки на чугунные комплектующие для печей",
        text: "Сегодня существует несколько видов банных печей, каждая из которых имеет свои особенности.",
        image: skidki,
        href: `${basePath}/skidki`,
    },
];

export default newsItems;