import './Reviews.scss'
import Slider from "@/components/Slider";
import reviewsItems from "@/sections/Reviews/reviewsitems";
import ReviewCard from "@/components/ReviewCard";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Button from "@/components/Button";
import Section from "@/layouts/Section";

const Reviews = (props) => {
    const {
        title = 'Отзывы',
        label = 'Ваше мнение о нас',
    } = props

    const sliderNavigationId = 'reviews-slider-navigation'

    const reviewsSliderParams = {
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoHeight: true,
        allowTouchMove: true,
        breakpoints: {
            0: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                allowTouchMove: true,
                autoHeight: true,
                enabled: true,
            },
            481: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                allowTouchMove: true,
                autoHeight: true,
                enabled: true,
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                allowTouchMove: true,
                autoHeight: false,
                enabled: true,
            },
            991: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                allowTouchMove: true,
                autoHeight: false,
                enabled: true,
            },
            1260: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                allowTouchMove: true,
                autoHeight: false,
                enabled: true,
            }
        }
    }

    return (
        <Section
            className='reviews slider-outside-arrows'
            title={title}
            label={label}
            titleId='reviews-title'
            sectionLink='/reviews'
            sectionLinkLabel='Смотреть все отзывы'
        >
            <div className='slider-inner reviews__slider-inner'>
                <Slider
                    navigationTargetElementId={sliderNavigationId}
                    sliderParams={reviewsSliderParams}
                    hasScrollbar={true}
                >
                    {
                        reviewsItems.map(({name, text, platform, image}, index) => (
                            <ReviewCard
                                name={name}
                                text={text}
                                platform={platform}
                                image={image}
                                number={index + 1}
                                reviewsLength={reviewsItems.length}
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
                href='/reviews'
                label='Смотреть все товары'
            />
        </Section>
    )
}

export default Reviews