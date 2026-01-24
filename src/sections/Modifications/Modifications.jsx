import './Modifications.scss'
import Slider from "@/components/Slider";
import modificationsItems from "@/sections/Modifications/modificationsitems";
import ModificationsCard from "@/components/ModificationsCard";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Section from "@/layouts/Section";

const Modifications = (props) => {
    const {
        title = (
            <>
                <span className="section__title-row section__title-row--shift">
                    Варианты <span className="accent">модификации</span> печей и <span className="accent">дополнительная комлектация</span>
                </span>
                <span className="section__title-row section__title-row--center">
                    Все модификации создаем на производстве. И даем <span className="accent">гарантию 1 год.</span>
                </span>
            </>
        ),
        label = 'Под ваш стиль',
    } = props

    const sliderNavigationId = 'modifications-slider-navigation'

    const modificationsSliderParams = {
        slidesPerView: 3,
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
            620: {
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
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 20,
                allowTouchMove: true,
                enabled: true,
            },
            1260: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 20,
                allowTouchMove: true,
                enabled: true,
            }
        }
    }

    return (
        <Section
            className='modifications slider-outside-arrows'
            title={title}
            label={label}
            titleId='modifications-title'
        >
            <div className='slider-inner modifications__slider-inner'>
                <Slider
                    navigationTargetElementId={sliderNavigationId}
                    sliderParams={modificationsSliderParams}
                    hasScrollbar={true}
                >
                    {
                        modificationsItems.map(({title, image}, index) => (
                            <ModificationsCard
                                title={title}
                                image={image}
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
        </Section>
    )
}

export default Modifications