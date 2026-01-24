import './MobileMenu.scss'
import Button from "@/components/Button";

const MobileMenu = (props) => {

    return (
        <div className="mobile-menu visible-mobile">
          <Button
              className='catalog-button'
              iconName='katalog'
              href='#'
              label='Каталог'
              mode='transparent'
              iconPosition='above'
          />
          <Button
              className='favorite-button'
              iconName='favorite'
              href='#'
              label='Избранное'
              mode='transparent'
              iconPosition='above'
          />
          <Button
              className='compare-button'
              iconName='compare'
              href='#'
              label='Сравнить'
              mode='transparent'
              iconPosition='above'
          />
          <Button
              className='basket-button'
              iconName='basket'
              href='#'
              label='Корзина'
              mode='transparent'
              iconPosition='above'
          />
          <Button
              className='login-button'
              iconName='login'
              href='#'
              label='Войти'
              mode='transparent'
              iconPosition='above'
          />
        </div>
    )
}

export default MobileMenu