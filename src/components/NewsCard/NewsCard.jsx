import './NewsCard.scss'
import {Image} from "minista";

const NewsCard = (props) => {
    const {
      title,
      text,
      image,
      href,
    } = props

    return (
        <article className="news__card-wrapper">
          <a
              href={href}
              className='news__card'
          >
            <div className="news__card-media">
              <Image
                  src={image}
                  alt={title}
              />
            </div>
            <div className="news__card-body">
              <h3 className="news__card-title h4">
                {title}
              </h3>

              <p className="news__card-text">
                {text}
              </p>
            </div>
          </a>
        </article>
    )
}

export default NewsCard