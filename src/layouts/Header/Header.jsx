import './Header.scss';

import Logo from "@/components/Logo";
import BurgerButton from "@/components/BurgerButton";
import Button from "@/components/Button";

import classNames from "classnames";
import SearchString from "@/components/SearchString";
import Icon from "@/components/Icon";

const Header = ( props ) => {
    const {
        url,
        isFixed,
    } = props;

    const menuItems = {
        topItems: [
            {
                label: 'О нас',
                href: '/about'
            },{
                label: 'Дилерам',
                href: '/dealer'
            },{
                label: 'Получение и оплата',
                href: '/receipt-and-payment'
            },{
                label: 'Доставка',
                href: '/delivery'
            },{
                label: 'Сервис и поддержка',
                href: '/help'
            },{
                label: 'Контакты',
                href: '/contacts'
            },
        ],
        bottomItems: [
            {
                label: 'Акции',
                href: '/promotion'
            },{
                label: 'Услуги',
                href: '/services'
            },{
                label: 'Всё для бани',
                href: '/bathhouse'
            },{
                label: 'Всё для сауны',
                href: '/sauna'
            },{
                label: 'Всё для мангала',
                href: '/grill'
            },{
                label: 'Аксессуары',
                href: '/accessories'
            },{
                label: 'Комлектующие',
                href: '/components'
            },
        ]
    }

    const companyInfo = {
        phone: '+73472662316',
        phoneVisual: '+7 (347) 266 23 16',
        cities: [
            'Уфа',
            'с.Толбазы, Аургазинский р-н',
            'с.Никифарово, Альшеевский р-н, РБ',
            'с.Иглино, Иглинский р-н',
            'г.Магнитогорск, Челябинская обл',
            'с.Толбазы, Аургазинский р-н',
            'с.Никифарово, Альшеевский р-н, РБ',
            'с.Иглино, Иглинский р-н',
            'г.Магнитогорск, Челябинская обл',
            'с.Толбазы, Аургазинский р-н',
            'Уфа',
            'с.Толбазы, Аургазинский р-н',
            'с.Никифарово, Альшеевский р-н, РБ',
            'с.Иглино, Иглинский р-н',
            'г.Магнитогорск, Челябинская обл',
            'с.Толбазы, Аургазинский р-н',
            'с.Никифарово, Альшеевский р-н, РБ',
            'с.Иглино, Иглинский р-н',
            'г.Магнитогорск, Челябинская обл',
        ],
    }

    const basePath = import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_PUBLIC_PATH
        : ''

    return (
        <header className={classNames('header', {
            'is-fixed': isFixed,
        })} data-js-overlay-menu=''>
            <div className='header__inner container'>
                <div className='header__inner-top'>
                    <div className="header__points">
                        <div className="header__points-label">Большеустикинское</div>
                        <div className="header__points-info">
                            <div className="header__points-cities">
                                <Icon
                                    className="button__icon"
                                    name='cities'
                                />
                                15 городов
                            </div>
                            <span className="header__points-value">
                                <Icon
                                    className="button__icon"
                                    name='points'
                                />
                                35 точек
                            </span>
                        </div>
                    </div>
                    <div className="header__controls">
                        <nav className='header__menu header__menu-top'>
                            <ul className='header__menu-list'>
                                {menuItems.topItems.map((item, index) => (
                                    <li key={index} className='header__menu-item'>
                                        <a
                                            href={`${basePath}${item.href}`}
                                            className={classNames('header__menu-link', {
                                                'is-active': item.href === url
                                            })}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <a className="header__company-phone" href={`tel:${companyInfo.phone}`}>
                            <Icon
                                className="button__icon"
                                name='phone'
                            />
                            {companyInfo.phoneVisual}
                        </a>
                    </div>
                </div>
                <div className='header__inner-bottom'>
                    <div className='header__primary'>
                        <div className='header__primary-search'>
                            <Logo loading='eager'/>
                            <Button
                                className='katalog-button'
                                iconName='katalog'
                                mode='red'
                                href={`${basePath}/katalog`}
                                label='Каталог'
                            />
                            <SearchString/>
                        </div>
                        <div className="header__primary-buttons">
                            <Button
                                className='favorite-button'
                                iconName='favorite'
                                href={`${basePath}/favorite`}
                                label='Избранное'
                                mode='transparent'
                                iconPosition='above'
                            />
                            <Button
                                className='compare-button'
                                iconName='compare'
                                href={`${basePath}/compare`}
                                label='Сравнить'
                                mode='transparent'
                                iconPosition='above'
                            />
                            <Button
                                className='basket-button'
                                iconName='basket'
                                href={`${basePath}/basket`}
                                label='Корзина'
                                mode='transparent'
                                iconPosition='above'
                            />
                            <Button
                                className='login-button'
                                iconName='login'
                                href={`${basePath}/login`}
                                label='Войти'
                                mode='transparent'
                                iconPosition='above'
                            />
                            <Button
                                className='search-button visible-tablet'
                                iconName='search'
                                isLabelHidden
                                mode='white'
                                extraAttrs={{
                                    'data-search-button': 'search-window'
                                }}
                            />
                            <BurgerButton
                                className='header__burger-button visible-tablet'
                                extraAttrs={{
                                    'data-js-overlay-menu-burger-button': ''
                                }}
                            />
                        </div>
                    </div>
                    <div className='header__navigation'>
                        <nav className='header__menu header__menu-bottom'>
                            <ul className='header__menu-list'>
                                {menuItems.bottomItems.map((item, index) => (
                                    <li key={index} className='header__menu-item'>
                                        <a
                                            href={`${basePath}${item.href}`}
                                            className={classNames('header__menu-link', {
                                                'is-active': item.href === url
                                            })}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <Button
                            label='Заказать звонок'
                            className='header__button-call'
                            mode='white'
                            extraAttrs={{
                                'data-js-modal-notify-button': 'callback-window'
                            }}
                        />
                    </div>
                    <dialog
                        className='header__overlay-menu-dialog'
                        data-js-overlay-menu-dialog=''
                    >
                        <div className="header__points-label">Большеустикинское</div>
                        <nav className='header__overlay-navigation'>
                            <ul className='header__menu-list header__menu-list--main'>
                                {menuItems.bottomItems.map((item, index) => (
                                    <li key={index} className='header__menu-item'>
                                        <a
                                            href={`${basePath}${item.href}`}
                                            className={classNames('header__menu-link', {
                                                'is-active': item.href === url
                                            })}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <ul className='header__menu-list'>
                                {menuItems.topItems.map((item, index) => (
                                    <li key={index} className='header__menu-item'>
                                        <a
                                            href={`${basePath}${item.href}`}
                                            className={classNames('header__menu-link', {
                                                'is-active': item.href === url
                                            })}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className='header__overlay-actions'>
                            <a className="header__company-phone" href={`tel:${companyInfo.phone}`}>
                                <Icon
                                    className="button__icon"
                                    name='phone'
                                />
                                {companyInfo.phoneVisual}
                            </a>
                            <Button
                                label='Заказать звонок'
                                className='header__button-call'
                                mode='white'
                                extraAttrs={{
                                    'data-js-modal-notify-button': 'callback-window'
                                }}
                            />
                        </div>
                    </dialog>
                </div>
            </div>
        </header>
    )
}

export default Header;