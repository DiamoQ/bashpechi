import './WhySlide.scss'
import Slider from "@/components/Slider";
import {Image} from "minista";
import Icon from "@/components/Icon";

const WhySlide = (props) => {
    const {
      slide,
    } = props

    return (
        <div
            className='why-slide'
        >
            <div className='why-slide__info'>
              <h3 className="why-slide__title">{slide.title}</h3>
              <p className="why-slide__description">{slide.text}</p>
            </div>
            <div className='why-slide__photos'>
              <Slider
                  hasScrollbarOnMobile={false}
                  hasScrollbar={false}
                  navigationPosition='abs-bottom'
                  isNavigationHiddenMobile={true}
                  hasPagination={true}
                  ulPhotoSwipeAttrs={{
                      children: "a",
                      zoom: true,
                      wheelToZoom: true
                  }}
                  sliderParams={{
                    slidesPerView: 1,
                    loop: true,
                    spaceBetween: 0,
                    autoplay: {
                      delay: 4000,
                      disableOnInteraction: false,
                    },
                    breakpoints: {
                      1024: {
                        allowTouchMove: false,
                      }
                    }
                  }}
              >
                <a
                    href={slide.image}
                >
                    <Image src={slide.image} alt='Почему мы'/>
                </a>
                <a
                  href={slide.image}
                >
                  <Image src={slide.image} alt='Почему мы'/>
              </a>
                  <a
                      href={slide.image}
                  >
                      <Image src={slide.image} alt='Почему мы'/>
                  </a>
              </Slider>
              <Icon
                  className="why-slide__icon why-slide__icon--tl"
                  name="corner-tl"
              />
              <Icon
                  className="why-slide__icon why-slide__icon--tr"
                  name="corner-tr"
              />
              <Icon
                  className="why-slide__icon why-slide__icon--br"
                  name="corner-br"
              />
              <Icon
                  className="why-slide__icon why-slide__icon--bl"
                  name="corner-bl"
              />
            </div>
        </div>
    )
}

export default WhySlide