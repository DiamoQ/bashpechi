import './Section.scss'
import classNames from 'classnames'

const Section = (props) => {
  const {
    className,
    label,
    title,
    headerIsVisible = true,
    titleIsVisible = true,
    titleId,
    mainSectionInPage = false,
    sectionLink,
    sectionLinkLabel,
    children,
  } = props

  return (
      <section
          className={classNames(className, 'section container', {
            'section--with-page-link': sectionLink,
          })}
          aria-labelledby={titleId}
      >
        <header className={`section__header ${!headerIsVisible && ' visually-hidden'}`}>
          { label && <div className="section__label"><span>{label}</span></div>}
          <div className="section__title-wrapper">
            { mainSectionInPage ? (
                <h1 className={`page-title ${!titleIsVisible && ' visually-hidden'}`} id={titleId}>
                  {title}
                </h1>
            ) : (
                <h2 className={`section__title ${!titleIsVisible && ' visible-hidden'}`} id={titleId}>
                  {title}
                </h2>
            )
            }
            {sectionLink && (
                <a href={sectionLink} className='section__page-link hidden-mobile'>
                  {sectionLinkLabel}
                </a>
            )}
          </div>
        </header>
        <div className='section__body'>
          {children}
        </div>
      </section>
  )
}

export default Section