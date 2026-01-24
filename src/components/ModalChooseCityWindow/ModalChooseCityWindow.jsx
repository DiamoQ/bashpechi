import './ModalChooseCityWindow.scss';
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const ModalChooseCityWindow = (props) => {
  const {
    modalId = 'choose-city-window',
    title = 'Выберите ваш город',
    description = '',
  } = props

  const cities = [
    {
      id: 'ufa',
      label: 'Уфа',
      region: 'Республика Башкортостан'
    },
    {
      id: 'tolbazy-aurgazinsky-rn',
      label: 'с. Толбазы, Аургазинский р-н',
      region: 'Республика Башкортостан'
    },
    {
      id: 'nikifarovo-alsheevsky-rn',
      label: 'с. Никифарово, Альшеевский р-н, РБ',
      region: 'Республика Башкортостан'
    },
    {
      id: 'iglino-iglinsky-rn',
      label: 'с. Иглино, Иглинский р-н',
      region: 'Республика Башкортостан'
    },
    {
      id: 'magnitogorsk-chelyabinskaya-obl',
      label: 'г. Магнитогорск, Челябинская обл',
      region: 'Челябинская область'
    },
    {
      id: 'ufa2',
      label: 'Уфа 2',
      region: 'Республика Башкортостан'
    },
    {
      id: 'tolbazy-aurgazinsky-rn2',
      label: 'с. Толбазы, Аургазинский р-н 2',
      region: 'Республика Башкортостан'
    },
    {
      id: 'nikifarovo-alsheevsky-rn2',
      label: 'с. Никифарово, Альшеевский р-н, РБ 2',
      region: 'Республика Башкортостан'
    },
    {
      id: 'iglino-iglinsky-rn2',
      label: 'с. Иглино, Иглинский р-н 2',
      region: 'Республика Башкортостан'
    },
    {
      id: 'magnitogorsk-chelyabinskaya-obl2',
      label: 'г. Магнитогорск, Челябинская обл 2',
      region: 'Челябинская область'
    },
    {
      id: 'tolbazy-aurgazinsky-rn3',
      label: 'с. Толбазы, Аургазинский р-н 2',
      region: 'Республика Башкортостан'
    },
    {
      id: 'nikifarovo-alsheevsky-rn3',
      label: 'с. Никифарово, Альшеевский р-н, РБ 2',
      region: 'Республика Башкортостан'
    },
    {
      id: 'iglino-iglinsky-rn3',
      label: 'с. Иглино, Иглинский р-н 2',
      region: 'Республика Башкортостан'
    },
    {
      id: 'magnitogorsk-chelyabinskaya-obl3',
      label: 'г. Магнитогорск, Челябинская обл 2',
      region: 'Челябинская область'
    }
  ];

  return (
      <div data-js-modal-notify={modalId} className="modal choose-city-modal">
        <div className="modal__dialog" data-js-modal-notify-dialog={modalId}>
          <header className="modal__header">
            <h3 className="modal__title h4">
              {title}
            </h3>
            { description && (
                <p className="modal__description">{description}</p>
            )}
            <Button
                className='modal__close-button'
                iconName='close'
                isLabelHidden={true}
                label='Закрыть модальное окно'
                mode='transparent'
                hasFillIcon
                extraAttrs={{
                  'data-js-modal-notify-close': modalId
                }}
            />
          </header>
          <form id="chooseCitySearch"
                className="search choose-city-modal__search"
          >
            <label htmlFor="chooseCitySearch">
              Поиск
              <input
                  type="text"
                  name="searchCity"
                  id="chooseCitySearch"
                  className="choose-city-modal__input"
                  placeholder="Введите название города"
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
          <p className="choose-city-modal__hint">Или выберите из списка</p>
          <ul
              className="choose-city-modal__list"
              role="listbox"
              aria-label="Список городов"
              data-js-choose-city=""
          >
            {cities.map((city) => (
                <li className="choose-city-modal__item" key={city.id}>
                  <Button
                      className='choose-city-modal__option'
                      iconName='points'
                      mode='transparent'
                      label={city.label}
                      extraAttrs={{
                        'role': 'option',
                        'data-city-id': `${city.id}`,
                        'data-js-choose-city-option': ""
                      }}
                  />
                </li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default ModalChooseCityWindow