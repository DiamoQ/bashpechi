import './MainSlider.scss'
import classNames from 'classnames'
import Slider from "@/components/Slider";
import mainSlides from "@/sections/MainSlider/mainSlides";

const MainSlider = (props) => {
    const {
        className,
    } = props

    return (
        <section
            className={classNames(className, 'main-slider container')}
        >
          <Slider
              hasScrollbarOnMobile={false}
              hasScrollbar={false}
              navigationPosition='abs-bottom'
              isNavigationHiddenMobile={true}
              hasPagination={true}
              navigationButtonMode="transparent"
              sliderParams={{
                slidesPerView: 1,
                loop: true,
                spaceBetween: 0,
                autoplay: {
                  delay: 6000,
                  disableOnInteraction: false,
                },
                breakpoints: {
                  1024: {
                    allowTouchMove: false,
                  }
                }
              }}
          >
            {mainSlides.map((slide, i,) => (
                <a
                    className="main__slide"
                    href={slide.href}
                    key={i}
                    target='_blank'
                    rel='noopener noreferrer'
                    title={slide.title}
                >
                  <picture>
                    <source srcSet={slide.mobileBanner} media="(max-width: 480px)"/>

                    <img
                        className="main__slide"
                        src={slide.desktopBanner}
                        alt={slide.title}
                    />
                  </picture>
                  <div className="main__slide-content">
                    <span className="main__slide-label">{slide.label}</span>
                    <h2 className="main__slide-title">
                      {slide.title.map((line, i) => (
                          <span key={i} className="main__slide-title-line">
                            {line}
                          </span>
                      ))}
                    </h2>
                    <div className="main__slide-description">
                      {slide.text.map((line, i) => (
                          <span key={i} className="main__slide-description-line">
                            {line}
                          </span>
                      ))}
                    </div>
                  </div>
                </a>
            ))}
          </Slider>
        </section>
    )
}

export default MainSlider