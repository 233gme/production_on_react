import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

import cls from './LangSwitcher.module.scss'

import LangIcon from 'shared/assets/icons/language.svg'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { type TFunction } from 'i18next'

interface LangSwitcherProps {
  className?: string
  showIcon?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, showIcon = false }) => {
  const { t, i18n } = useTranslation()
  const { theme } = useTheme()

  const onToggleLang = async (): Promise<TFunction> =>
    await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')

  return (
    <div className={classNames(cls.LangSwitcher)}>
      <Button onClick={onToggleLang} title={t('langSwitcherBtn')}>
        {
          showIcon ? <LangIcon fill={theme === Theme.DARK ? '#fff' : '#fff'}/> : t('lang')
        }
      </Button>
    </div>
  )
}
