import './News.scss'
import Section from "@/layouts/Section";
import newsItems from "@/sections/News/newsitems";
import NewsCard from "@/components/NewsCard";
import Button from "@/components/Button";

const News = (props) => {
    const {
      title = 'Новости и акции',
      label = 'Актуальное',
    } = props

    const basePath = import.meta.env.MODE === 'production'
      ? import.meta.env.VITE_PUBLIC_PATH
      : ''

    return (
        <Section
            className='news'
            title={title}
            label={label}
            titleId='news-title'
            sectionLink='/news'
            sectionLinkLabel='Смотреть все'
        >
          <div className='news__list'>
            {
              newsItems.map(({title, text, image, href}, index) => (
                  <NewsCard
                      title={title}
                      text={text}
                      image={image}
                      href={href}
                      key={index}
                  />
              ))
            }</div>
            <Button
                className='more-button visible-mobile'
                mode='white'
                href='/news'
                label='Смотреть еще'
            />
        </Section>
    )
}

export default News