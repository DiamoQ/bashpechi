import './ModalCallbackWindow.scss';
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";

const ModalCallbackWindow = (props) => {
  const {
    modalId = 'callback-window',
    title = 'Заказать звонок',
    description = '',
    hasProductNameField = false,
  } = props

  return (
      <div data-js-modal-notify={modalId} className="modal">
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
          <form className="modal__form form" action=''  method='POST'>
            <Field
                className="form__cell"
                label='Ваше имя'
                id="modalPersonName"
                placeholder='Имя'
                isRequired
            />
            <Field
                className="form__cell"
                label='Ваш телефон'
                id='modalCallbackPhone'
                placeholder='+7 ( )'
                inputMode='tel'
                mask='+7 (000) 000-00-00'
                isRequired
            />
            <Field
                className="form__cell"
                label='Ваше сообщение'
                placeholder='Ваше сообщение'
                type='textarea'
                isRequired
            />
            <div className="form__cell form__cell--wide form__cell--actions">
              <Checkbox
                  className="form__agreement"
                  id={`checkbox-${modalId}`}
                  isRequired
              />
              <Button
                  className="form__submit-button"
                  label='Отправить'
                  type='submit'
                  mode='red'
              />
            </div>
          </form>
        </div>
      </div>
  )
}

export default ModalCallbackWindow