import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ErrorPage.module.scss'
import { useTranslation } from 'react-i18next'

import { Button } from 'shared/ui/Button/Button'
import ErrorIcon from 'shared/assets/icons/error.svg'

const ErrorPage: FC = () => {
  const { t } = useTranslation()

  const reloadPage = (): void => {
    location.reload()
  }

  return (
    <div className={classNames(cls.ErrorPage)}>
      <ErrorIcon />
      <p>{t('somethingWentWrong')}</p>
      <Button onClick={reloadPage} className={cls.errorPageBtn}>
        {t('reboot')}
      </Button>
    </div>
  )
}

export default ErrorPage
