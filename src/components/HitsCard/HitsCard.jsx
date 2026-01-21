import './HitsCard.scss'
import {Image} from "minista";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const HitsCard = (props) => {
    const {
      title,
      badge,
      image,
      price,
      href,
    } = props

    return (
        <article className="product-card">
            <a className="product-card__media" href="#" aria-label={title}>
                <Image className="product-card__image" src={image} alt={`Фотография товара ${title}`}/>
                { badge && <span className="product-card__badge" aria-label={badge}>{badge}</span> }
            </a>

            <div className="product-card__body">
                <a className="product-card__title h4" href={href}>
                    {title}
                </a>

                <div className="product-card__bottom">
                    <div className="product-card__price" aria-label={`Цена ${price} рублей`}>
                        {price} ₽
                    </div>

                    <div className="product-card__actions">
                        <Button
                            className='favorite-button'
                            iconName='favorite'
                            isLabelHidden={true}
                            mode='transparent'
                        />

                        <Button
                            label='Подробнее'
                            className='product-card__button'
                            mode='red'
                            href={href}
                        />
                    </div>
                </div>
            </div>
            <Icon
                className="product-card__icon product-card__icon--tl"
                name="corner-tl"
            />
            <Icon
                className="product-card__icon product-card__icon--tr"
                name="corner-tr"
            />
            <Icon
                className="product-card__icon product-card__icon--br"
                name="corner-br"
            />
            <Icon
                className="product-card__icon product-card__icon--bl"
                name="corner-bl"
            />
        </article>

    )
}

export default HitsCard