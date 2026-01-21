import './Categories.scss'
import Section from "@/layouts/Section";
import CategoryCard from "@/components/CategoryCard";
import categoryItems from "./categoryitems";

const Categories = (props) => {
  const {
    title = 'Категории',
    mainSectionInPage,
    headerIsVisible = false,
    categoriePageLinkIsVisible = false,
  } = props

  const basePath = import.meta.env.MODE === 'production'
      ? import.meta.env.VITE_PUBLIC_PATH
      : ''

  return (
      <Section
          className='categories'
          title={title}
          titleId='categories-title'
          headerIsVisible={headerIsVisible}
          mainSectionInPage={mainSectionInPage}
      >
        <div className='categories__list'>
          {
            categoryItems.map(({title, image, href, categoryPath}, index) => (
                <CategoryCard
                    title={title}
                    image={image}
                    href={href}
                    categoryPath={categoryPath}
                    key={index}
                />
            ))
          }
        </div>
      </Section>
  )
}

export default Categories