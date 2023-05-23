import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className, children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggleCollapsed = (): void => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className ?? ''
      ])}
    >
      <button onClick={onToggleCollapsed}>WWW</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher/>
      </div>
    </div>
  )
}
