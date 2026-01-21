import './Footer.scss';

import Socials from "@/components/Socials";
import Icon from "@/components/Icon";

const Footer = () => {
    const menuItems = [
        {
            title: 'О нас',
            links: [
                {
                    title: 'Документы',
                    link: '/documents',
                },
                {
                    title: 'Отзывы',
                    link: '/reviews',
                },
                {
                    title: 'Работы',
                    link: '/works',
                },
                {
                    title: 'Дилерам',
                    link: '/dealer',
                },
                {
                    title: 'Реквизиты',
                    link: '/details',
                },
            ],
        },
        {
            title: 'Услуги',
            links: [
                {
                    title: 'Сварка любых металлоконструкций',
                    link: '/serv1',
                },
                {
                    title: 'Резка (рубка) металла',
                    link: '/serv2',
                },
                {
                    title: 'Плазменная резка ЧПУ',
                    link: '/serv3',
                },
                {
                    title: 'Выезд замерщика',
                    link: '/serv4',
                },
                {
                    title: 'Монтаж и установка печей «под ключ»',
                    link: '/serv5',
                },
            ],
        },
        {
            title: 'Каталог',
            links: [
                {
                    title: 'Печи',
                    link: '/cat1',
                },
                {
                    title: 'Мангалы, Грили, Смокеры',
                    link: '/cat2',
                },
                {
                    title: 'Баки для воды',
                    link: '/cat3',
                },
                {
                    title: 'Одноконтурные дымоходы',
                    link: '/cat4',
                },
                {
                    title: 'Двухконтурные дымоходы',
                    link: '/cat5',
                },
            ],
        },
        {
            title: 'Полезное',
            links: [
                {
                    title: 'Акции',
                    link: '/sales',
                },
                {
                    title: 'Статьи',
                    link: '/news',
                },
                {
                    title: 'Доставка',
                    link: '/delivery',
                },
                {
                    title: 'Оплата',
                    link: '/pay',
                },
                {
                    title: 'Оферта',
                    link: '/oferta',
                },
            ],
        }
    ]

    const companyInfo = {
        mail: 'bashpechi@yandex.ru',
        vk: 'https://www.vk.ru',
        telegram: 'https://www.telegram.com',
        whatsapp: 'https://www.whatsapp.com',
        phone: '+7-351-777-80-90',
        phoneVisual: '+7 (347) 266 23 16',
    }

    const socials = [
        {
            label: 'Мы в ВКонтакте',
            iconName: 'vk',
            link: 'vk.com',
        },
        {
            label: 'Мы в YouTube',
            iconName: 'youtube',
            link: 'youtube.com',
        },
    ]

    const payServices = {
        visa : {
            label: 'VISA',
            iconName: 'visa',
        },
        mir : {
            label: 'МИР',
            iconName: 'mir',
        },
        union : {
            label: 'Union',
            iconName: 'union',
        },
    }

    const basePath = import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_PUBLIC_PATH
        : ''

    return (
        <footer className='footer'>
            <div className='footer__inner container'>
                <nav className='footer__menu'>
                    {menuItems.map(({title, links, socialLinks}, index) => (
                        <div className='footer__menu-column' key={index}>
                            <h4 className="footer__menu-title h6">{title}</h4>
                            {links?.length > 0 && (
                                <ul className='footer__menu-list'>
                                    {links.map(({title, link}, index) => (
                                        <li className='footer__menu-item' key={index}>
                                            <a href={`${basePath}${link}`} className='footer__menu-link'>{title}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {socialLinks?.length > 0 && (
                                <Socials className='footer__soc1als' links={socialLinks}/>
                            )}
                        </div>
                    ))}
                </nav>
                <address className='footer__contacts'>
                    <h4 className="footer__contacts-title h6">Контакты</h4>
                    <div className="footer__contacts-list">
                        <a className="footer__contacts-link footer__company-phone" href={`tel:${companyInfo.phone}`}>{companyInfo.phoneVisual}</a>
                        <a className="footer__contacts-link footer__company-mail" href={`mailto:${companyInfo.mail}`}>{companyInfo.mail}</a>
                        <a className="footer__contacts-link footer__company-whatsapp" href={`${companyInfo.whatsapp}`}>Вотсап</a>
                        <a className="footer__contacts-link footer__company-telegram" href={`${companyInfo.telegram}`}>Телеграм</a>
                        <div className='footer__contacts-socials'>
                            <Socials links={socials}/>
                        </div>
                    </div>
                </address>
                <div className='footer__others'>
                    <div className="footer__pay-services">
                        <Icon
                            className="button__icon"
                            name={payServices.visa.iconName}
                            hasFill
                            areaLabel={payServices.visa.label}
                            extraStyleAttrs={{
                                'aspectRatio': '45 / 15'
                            }}
                        />
                        <Icon
                            className="button__icon"
                            name={payServices.mir.iconName}
                            hasFill
                            areaLabel={payServices.mir.label}
                            extraStyleAttrs={{
                                'aspectRatio': '55 / 15'
                            }}
                        />
                        <Icon
                            className="button__icon"
                            name={payServices.union.iconName}
                            hasFill
                            areaLabel={payServices.union.label}
                            extraStyleAttrs={{
                                'aspectRatio' : '25 / 15'
                            }}
                        />
                    </div>
                    <p className="footer__name">
                        <span>Башпечи</span>
                        <span>Все права защищены©2025</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;