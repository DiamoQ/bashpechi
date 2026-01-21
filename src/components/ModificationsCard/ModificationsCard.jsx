import './ModificationsCard.scss'
import {Image} from "minista";
import Icon from "@/components/Icon";

const ModificationsCard = (props) => {
  const {
    title,
    image,
  } = props

  return (
      <article className="modifications__card">
        <div className="modifications__card-media">
          <Image
              className="modifications__card-img"
              src={image}
              alt={title}
          />
          <Icon
              className="modifications__card-icon modifications__card-icon--tl"
              name="corner-tl"
          />
          <Icon
              className="modifications__card-icon modifications__card-icon--tr"
              name="corner-tr"
          />
          <Icon
              className="modifications__card-icon modifications__card-icon--br"
              name="corner-br"
          />
          <Icon
              className="product-card__icon product-card__icon--bl"
              name="corner-bl"
          />
        </div>

        <h3 className="modifications__card-title h4">
          {title}
        </h3>
      </article>

  )
}

export default ModificationsCard