import { type FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import Modal from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const showAuthModalHandler = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar)}>
      <div className={classNames(cls.links)}>
        <Button
          onClick={showAuthModalHandler}
          theme={ButtonTheme.CLEAR}
        >
          {t('navbarSingIn')}
        </Button>
      </div>
      <Modal isOpen={isAuthModal} onClose={showAuthModalHandler}>

      </Modal>
    </div>
  )
}
