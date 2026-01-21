const mangaly = '/src/assets/images/categories/mangaly.png';
const pechi = '/src/assets/images/categories/pechi.png';
const baki = '/src/assets/images/categories/baki.png';
const odnidimohody = '/src/assets/images/categories/odnidimohody.png';
const dvadimohody = '/src/assets/images/categories/dvadimohody.png';
const aksesuary = '/src/assets/images/categories/aksesuary.png';
const komplektaciya = '/src/assets/images/categories/komplektaciya.png';
const kamni = '/src/assets/images/categories/kamni.png';
const materialy = '/src/assets/images/categories/materialy.png';

const basePath = import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PUBLIC_PATH
    : ''

const categoryItems = [
    {
        title: "Мангалы, Грили, Смокеры",
        image: mangaly,
        href: `${basePath}/mangaly`,
        categoryPath: 'Мангальные зоны / Смокеры / Грили / Мангалы /Печи под казан / Аксессуары',
    },{
        title: "Печи",
        image: pechi,
        href: `${basePath}/pechi`,
        categoryPath: 'Отопительные / Банные / Стальные / Чугунные',
    },{
        title: "Баки для воды",
        image: baki,
        href: `${basePath}/baki`,
        categoryPath: 'Навесные / Приставные / Теплообменники /Запорная арматура',
    },{
        title: "Одноконтурные домоходы",
        image: odnidimohody,
        href: `${basePath}/odnidimohody`,
        categoryPath: 'Комплектующие / Интерьерные',
    },{
        title: "Двухконтурные домоходы",
        image: dvadimohody,
        href: `${basePath}/dvadimohody`,
        categoryPath: 'Копмлектующие / Интерьерные',
    },{
        title: "Аксессуары",
        image: aksesuary,
        href: `${basePath}/aksesuary`,
        categoryPath: 'Дровницы / Ковшы / Экраны / Флюгеры',
    },{
        title: "Комплектующие",
        image: komplektaciya,
        href: `${basePath}/komplektaciya`,
        categoryPath: 'Дверцы / Плиты / Задвижки / Казаны / Решетки',
    },{
        title: "Камни",
        image: kamni,
        href: `${basePath}/kamni`,
        categoryPath: 'Натуральные камни / Металические пирамидки',
    },{
        title: "Материалы",
        image: materialy,
        href: `${basePath}/materialy`,
        categoryPath: 'Огнеупорные материалы / Эмали / Герметики',
    },
];

export default categoryItems;