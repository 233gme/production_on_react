import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'

import cls from './ThemeSwitcher.module.scss'

import LightOffIcon from 'shared/assets/icons/moon.svg'
import LightOnIcon from 'shared/assets/icons/sun.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className ?? ''])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <LightOnIcon/> : <LightOffIcon/>}
    </Button>
  )
}
