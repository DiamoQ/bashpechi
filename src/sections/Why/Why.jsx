import './Why.scss'
import Section from "@/layouts/Section";
import whySlides from "@/sections/Why/whySlides";
import Slider from "@/components/Slider";
import WhySlide from "@/components/WhySlide";

const Why = (props) => {
    const {
      title = 'Кратко почему наши мангалы - лучший выбор для удобного, безопасного и надёжного приготовления еды на природе с продуманной конструкцией.',
      label = 'Почему мы',
    } = props

    return (
        <Section
            className='why'
            title={title}
            label={label}
            titleId='why-title'
        >
          <Slider
              hasScrollbarOnMobile={false}
              hasScrollbar={false}
              navigationPosition='abs-bottom'
              isNavigationHiddenMobile={true}
              sliderParams={{
                slidesPerView: 1,
                loop: true,
                spaceBetween: 10,
                autoplay: {
                  delay: 20000,
                  disableOnInteraction: false,
                },
                breakpoints: {
                  1024: {
                    allowTouchMove: false,
                  }
                }
              }}
          >
            {whySlides.map((slide, i,) => (
                <WhySlide slide={slide} key={i}/>
            ))}
          </Slider>
        </Section>
    )
}

export default Why