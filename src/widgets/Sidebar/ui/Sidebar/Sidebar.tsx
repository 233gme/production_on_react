import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import cls from './Sidebar.module.scss'
import ChevronLeftIcon from 'shared/assets/icons/chevronLeft.svg'
import ChevronRightIcon from 'shared/assets/icons/chevronRight.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className, children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggleCollapsed = (): void => { setCollapsed((prev) => !prev) }
  const { t } = useTranslation()

  return (
    <div
      data-testid={'sidebar'}
      className={
      classNames(cls.Sidebar,
        { [cls.collapsed]: collapsed },
        [className ?? '']
      )}
    >
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SIDEBAR_LINK}
          to={RoutePath.main}
        >
          <MainIcon/>
          <span className={cls.link}>{t('sidebarLinkMain')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SIDEBAR_LINK}
          to={RoutePath.about}
        >
          <AboutIcon/>
          <span className={cls.link}>{t('sidebarLinkAbout')}</span>
        </AppLink>
      </div>
      <Button
        data-testid={'sidebar-toggle-btn'}
        onClick={onToggleCollapsed}
        className={cls.collapsedBtn}
      >
        {collapsed ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher showIcon={collapsed}/>
      </div>
    </div>
  )
}
