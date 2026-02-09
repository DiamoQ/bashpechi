import './Why.scss'
import Section from "@/layouts/Section";
import whySlides from "@/sections/Why/whySlides";
import Slider from "@/components/Slider";
import WhySlide from "@/components/WhySlide";

const Why = (props) => {
    const {
        title = (
            <>
                <span className="section__title-row section__title-row--shift">
                  Кратко почему наши мангалы - <span className="accent">лучший выбор</span> для удобного,
                </span>
                <span className="section__title-row section__title-row--center">
                    безопасного и надёжного приготовления еды на <span className="accent">природе</span> с продуманной конструкцией.
                </span>
            </>
        ),
        label = 'Почему мы',
    } = props

    return (
        <Section
            className='why section--through'
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
                spaceBetween: 20,
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