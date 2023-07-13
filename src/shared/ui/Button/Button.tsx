import { type ButtonHTMLAttributes, type FC } from 'react'

import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear_inverted',
  OUTLINE = 'outline'
}

export enum ButtonSize {
  L = 'size_l',
  M = 'size_m',
  XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ButtonTheme.CLEAR,
  square,
  size = ButtonSize.M,
  ...otherProps
}) => {
  const mods: Record<string, boolean | undefined> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls.size]: true
  }

  return (
    <button
      className={classNames(cls.Button, mods, [className ?? '', cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
