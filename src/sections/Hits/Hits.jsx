import './Hits.scss'
import Section from "@/layouts/Section";
import hitsItems from "@/sections/Hits/hitsitems";
import HitsCard from "@/components/HitsCard";
import Button from "@/components/Button";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";

const Hits = (props) => {
  const {
    title = 'Хиты и новинки',
    label = 'Рекомендуем',
  } = props

  const basePath = import.meta.env.MODE === 'production'
      ? import.meta.env.VITE_PUBLIC_PATH
      : ''

  const sliderNavigationId = 'hits-slider-navigation'

  const hitsSliderParams = {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 20,
    allowTouchMove: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        allowTouchMove: true,
        enabled: true,
      },
      481: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
        allowTouchMove: true,
        enabled: true,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
        allowTouchMove: true,
        enabled: true,
      },
      991: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
        allowTouchMove: true,
        enabled: true,
      },
      1260: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 20,
        allowTouchMove: true,
        enabled: true,
      }
    }
  }

  return (
      <Section
          className='hits slider-outside-arrows'
          title={title}
          label={label}
          titleId='hits-title'
          sectionLink='/hits'
          sectionLinkLabel='Смотреть все товары'
      >
        <div className='slider-inner hits__slider-inner'>
          <Slider
              navigationTargetElementId={sliderNavigationId}
              sliderParams={hitsSliderParams}
              hasScrollbar={true}
          >
            {
              hitsItems.map(({title, badge, image, price, href}, index) => (
                  <HitsCard
                      title={title}
                      badge={badge}
                      image={image}
                      price={price}
                      href={href}
                      key={index}
                  />
              ))
            }
          </Slider>
          <SliderNavigation
              id={sliderNavigationId}
              hasPagination={false}
              mode='outside'
          />
        </div>
        <Button
            className='more-button visible-mobile'
            mode='white'
            href='/hits'
            label='Смотреть все товары'
        />
      </Section>
  )
}

export default Hits