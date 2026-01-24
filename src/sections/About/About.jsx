import './About.scss'
import Section from "@/layouts/Section";
import {Image} from "minista";

const ab1 = '/src/assets/images/about/ab1.png';
const ab2 = '/src/assets/images/about/ab2.png';
const ab3 = '/src/assets/images/about/ab3.png';

const About = (props) => {
    const {
      title = (
        <>
          <span className="section__title-row section__title-row--shift">
            Башпечи - это <span className="accent">настоящие печи</span> для вашей бани и сауны.
          </span>
          <span className="section__title-row section__title-row--center">
            Мы занимаемся производством банных печей уже <span className="accent">более 20 лет</span> и за это время прошли путь от первых моделей до продуманных решений, которые служат десятилетиями.
          </span>
        </>
      ),
      label = 'О компании',
    } = props

    return (
        <Section
            className='about'
            title={title}
            label={label}
            titleId='about-title'
        >
          <div className='about__block'>
            <div className="about__block-label h4">
              <span>Наша специализация</span>
            </div>
            <div className="about__block-info">
              <Image src={ab1} alt='Наша специализация'/>
              <div className="about__block-text">
                <p>Основное направление нашей деятельности компании «БашПечи» - изготовление и продажа печей для бани, сауны и отопления, а так же мангалов, грилей и мангальных комплексов из стали различной толщины, эксплуатируемых на твердом топливе. Наша компания реализует продукцию собственного производства, поэтому мы не только предлагаем Вам самые низкие цены без торговых наценок и переплат, но и даем гарантию высокого качества.</p>
              </div>
            </div>
          </div>
          <div className='about__hidden-block'
               aria-hidden="true"
               id="informationMore"
          >
            <div className='about__block'>
              <div className="about__block-label h4">
                <span>Собственное производство</span>
              </div>
              <div className="about__block-info">
                <Image src={ab2} alt='Собственное производство'/>
                <div className="about__block-text">
                  <p>Кроме производства банных печей, мы изготавливаем широкий ассортимент изделий на базе собственного производства печи и ёмкости любых модификаций и назначения. Это могут быть отопительные и варочные печи, буржуйки, модели для приготовления пищи, для бань и саун, а также нестандартные решения, разработанные под конкретные задачи заказчика. Мы выполняем изделия по индивидуальным проектам, чертежам и размерам, учитывая все технические требования и пожелания. </p>
                </div>
              </div>
            </div>
            <div className='about__block'>
              <div className="about__block-label h4">
                <span>Современные технологии</span>
              </div>
              <div className="about__block-info">
                <Image src={ab3} alt='Современные технологии'/>
                <div className="about__block-text">
                  <p>При изготовлении нашей продукции мы используем самые современные технологии, подкрепляя их обширными знаниями о русских банных традициях. Печи изготавливаются из надежных, современных и экологически чистых материалов. На заводе ведется контроль качества каждой изготовленной единицы продукции отделом технического контроля. Мы поможем вам подобрать модель печи, идеально подходящую для Вас с учетом Ваших пожелании и потребностей. Мы уверены, что наши печи принесут Вам тепло, здоровье, отличное настроение и будут радовать Вас своей безупречной работой долгие годы.</p>
                </div>
              </div>
            </div>
          </div>
          <button
              className="blocks__more-btn visible-mobile"
              type="button"
              data-js-more-trigger=""
              aria-controls="informationMore"
              aria-expanded="false"
              data-label-open="Скрыть"
              data-label-close="Подробнее"
          >
            Подробнее
          </button>
          <ul className='advantages-list'>
            <li className='advantages-item'>
              <span className='advantages-item__title h2'>с 2002 года</span>
              <span className='advantages-item__description'>мы работаем 23 года и знаем всё о правильном тепле и надёжных печах.</span>
            </li>
            <li className='advantages-item'>
              <span className='advantages-item__title h2'>+150 000 печей</span>
              <span className='advantages-item__description'>установлено и наши изделия служат в банях, домах и хозяйствах.</span>
            </li>
            <li className='advantages-item'>
              <span className='advantages-item__title h2'>435+ дилеров</span>
              <span className='advantages-item__description'>представляют продукцию компании  в разных регионах страны.</span>
            </li>
            <li className='advantages-item'>
              <span className='advantages-item__title h2'>30+ моделей</span>
              <span className='advantages-item__description'>и решений классических печей  и индивидуальных конструкций.</span>
            </li>
          </ul>
        </Section>
    )
}

export default About