import './SearchString.scss'
import Icon from "@/components/Icon";

const SearchString = () => {

  return (
      <div className="navigation__search-wrapper"
           data-js-navigation-wrapper="">
          <form id="navigationSearch"
                className="search navigation__search"
                data-js-navigation-search=""
          >
              <label htmlFor="navigation-search">
                  Поиск
                  <input
                      data-js-navigation-search-input=""
                      type="text"
                      name="search"
                      id="navigation-search"
                      className="navigation__input"
                      placeholder="Поиск"
                  />
              </label>
              <button type="submit" className="input__btn" aria-label="Найти" title="Найти">
                  <Icon
                      className="button__icon"
                      name='search'
                      width={18}
                      height={18}
                      hasFill
                      alt="Иконка кнопки поиска"
                      draggable="false"
                  />
              </button>
          </form>
      </div>
  )
}

export default SearchString