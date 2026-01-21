import './CategoryCard.scss'
import { Image } from 'minista'
import Icon from "@/components/Icon";

const CategoryCard = (props) => {
  const {
    title,
    image,
    href,
    categoryPath,
  } = props

  return (
      <a
          className='category-card'
          href={href}
          target='_blank'
      >
        <h3 className="category-card__title">
          {title}
        </h3>
        <div className="category-card__info">
          <span className="category-card__path">{categoryPath}</span>
          <Image
              className='category-card__image'
              src={image}
              alt={title}
          />
        </div>
        <Icon
            className="category-card__icon category-card__icon--tl"
            name="corner-tl"
        />
        <Icon
            className="category-card__icon category-card__icon--tr"
            name="corner-tr"
        />
        <Icon
            className="category-card__icon category-card__icon--br"
            name="corner-br"
        />
        <Icon
            className="category-card__icon category-card__icon--bl"
            name="corner-bl"
        />
      </a>
  )
}

export default CategoryCard