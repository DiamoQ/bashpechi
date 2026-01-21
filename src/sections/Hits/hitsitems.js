const nanogkah = '/src/assets/images/hits/nanojkah.png';
const bionika = '/src/assets/images/hits/bionika.png';
const atmosfera = '/src/assets/images/hits/atmosfera.png';
const pkm = '/src/assets/images/hits/pkm.png';

const basePath = import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PUBLIC_PATH
    : ''

const hitsItems = [
    {
        title: "Печь ПКМ-гриль на ножках стандарт",
        badge: "Хит",
        image: nanogkah,
        price: '26 400',
        href: `${basePath}/nanogkah`,
    },{
        title: "Мангальная станция «Бионика» + мангал 4мм 75см соты ",
        badge: "Новинка",
        image: bionika,
        price: '26 900',
        href: `${basePath}/bionika`,
    },{
        title: "«Атмосфера М» короткий топливный тоннель",
        badge: "Хит",
        image: atmosfera,
        price: '78 700',
        href: `${basePath}/atmosfera`,
    },{
        title: "Печь ПКМ-гриль на ножках стандарт",
        badge: "Новинка",
        image: pkm,
        price: '26 400',
        href: `${basePath}/pkm`,
    },
    {
        title: "Печь ПКМ-гриль на ножках стандарт",
        badge: "Хит",
        image: nanogkah,
        price: '26 400',
        href: `${basePath}/nanogkah`,
    },{
        title: "Мангальная станция «Бионика» + мангал 4мм 75см соты ",
        badge: "Новинка",
        image: bionika,
        price: '26 900',
        href: `${basePath}/bionika`,
    },{
        title: "«Атмосфера М» короткий топливный тоннель",
        badge: "Хит",
        image: atmosfera,
        price: '78 700',
        href: `${basePath}/atmosfera`,
    },{
        title: "Печь ПКМ-гриль на ножках стандарт",
        badge: "Новинка",
        image: pkm,
        price: '26 400',
        href: `${basePath}/pkm`,
    },
];

export default hitsItems;