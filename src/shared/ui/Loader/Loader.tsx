import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = () => {
  return (
    <div className={classNames((cls.Loader))}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
