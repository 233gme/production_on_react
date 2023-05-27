import { type ButtonHTMLAttributes, type FC } from 'react'

import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ThemeButton.CLEAR,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(cls.Button, {}, [className ?? '', cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
