import './ReviewCard.scss'
import classNames from 'classnames'
import {Image} from "minista";

const ReviewCard = (props) => {
    const {
        name,
        text,
        platform,
        image,
        number,
        reviewsLength,
    } = props

    return (
        <article className={classNames('review-card', {
            'review-card--photo': image,
        })}
                 data-js-photoswipe={JSON.stringify('children: "a", zoom: true, wheelToZoom: true')}
                 aria-label="Отзыв">
            <div className="review-card__aside">
                <div className="review-card__avatar" aria-hidden="true">
                    {platform ? (
                        <Image src={platform}
                               alt='Логотип отзовика'/>
                    ) : <span className="review-card__avatar-name">ВА</span>}
                </div>
                <span className="review-card__index"
                      aria-label={`${number} из ${reviewsLength}`}>{`${number} / ${reviewsLength}`}</span>
            </div>

            <div className="review-card__body">
                <div className="review-card__content">
                    <p className="review-card__text">
                        {text}
                    </p>
                </div>
                <span className="review-card__name">{name}</span>
            </div>

            { image &&  (
                <a className="review-card__shot" href={image} target="_blank" rel="noopener"
                   aria-label="Открыть скриншот отзыва">
                    <Image src={image} alt="Открыть фотографию отзыва" />
                </a>
            )}
        </article>
    )
}

export default ReviewCard