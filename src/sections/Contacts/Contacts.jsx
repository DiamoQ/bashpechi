import './Contacts.scss'
import Field from "@/components/Field";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import classNames from "classnames";
import Icon from "@/components/Icon";

const Contacts = () => {
    const soc1als = [
        {
            label: 'Телеграм',
            class: 'tg',
            icon: 'telegram',
            link: 'telegram.com',
        },{
            label: 'YouTube',
            class: 'ytb',
            icon: 'youtube',
            link: 'youtube.com',
        },{
            label: 'Вотсап',
            class: 'wts',
            icon: 'whatsapp',
            link: 'whatsapp.com',
            hasFill: true,
        },{
            label: 'ВК',
            class: 'vk',
            icon: 'vk',
            link: 'vk.com',
        },
    ]
    return (
        <section
            className='contacts'
            aria-labelledby='contacts-title'
        >
          <div className='contacts__inner container'>
              <div className='contacts__form-block'>
                <h2 className='section__title'>Контакты</h2>
                <span className='contacts__text'>Напишите нам, и мы свяжемся с вами как можно скорее.</span>
                <form className="form" action=''>
                  <Field
                      className="form__cell"
                      label='Ваше имя'
                      placeholder='Ваше имя'
                      isRequired
                  />
                  <Field
                      className="form__cell"
                      label='Ваш телефон'
                      id='contactsForm'
                      placeholder='Ваш телефон'
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
                        id="contactsCheckboxId"
                        label={
                            <>
                                Согласен на обработку{' '}
                                <a className="accent" href="/privacy" target="_blank" rel="noopener noreferrer">
                                    персональных данных
                                </a>
                            </>
                        }
                        isRequired
                    />
                    <Button
                        className="form__submit-button"
                        label='Отправить'
                        mode='red'
                        type='submit'
                    />
                  </div>
                </form>
              </div>
              <address className='contacts__address'>
                  <div className='contacts__address-main'>
                      <button
                          className="contacts__email h3"
                          type="button"
                          data-js-copy="bashpechi@yandex.ru"
                          data-copy-success="Email скопирован"
                      >
                          bashpechi@yandex.ru
                      </button>
                      <a className="contacts__phone h3" href="tel:+73472662316">+7 (347) 266 23 16</a>
                  </div>
                  <div className='contacts__soc1als'>
                      {soc1als.map((item, index) => (
                          <a
                              href={item.href}
                              className={classNames('contacts__soc1als-link h3', {
                                  'contacts__soc1als-link--tg': item.class === 'tg',
                                  'contacts__soc1als-link--wts': item.class === 'wts',
                                  'contacts__soc1als-link--vk': item.class === 'vk',
                                  'contacts__soc1als-link--ytb': item.class === 'ytb'
                              })}
                          >
                              <Icon
                                  className="contacts__soc1als-icon"
                                  name={item.icon}
                                  hasFill={item.hasFill}
                              />
                              <span className="contacts__soc1als-label">
                                {item.label}
                              </span>
                          </a>
                      ))}
                  </div>
              </address>
          </div>
        </section>
    )
}

export default Contacts