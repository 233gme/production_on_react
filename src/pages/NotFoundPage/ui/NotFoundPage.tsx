import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage: FC<NotFoundPageProps> = () => {
  const { t } = useTranslation()
  return (
    <div className={ classNames((cls.NotFoundPage)) }>
      {t('notFoundPage')}
    </div>
  )
}

export default NotFoundPage
