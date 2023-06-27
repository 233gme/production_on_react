import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <div className={classNames(cls.Navbar)}>
      <div className={classNames(cls.links)}>
        ...
      </div>
    </div>
  )
}
