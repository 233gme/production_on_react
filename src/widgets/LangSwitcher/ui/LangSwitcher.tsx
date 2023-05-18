import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

import cls from "./LangSwitcher.module.scss";

import LangIcon from "shared/assets/icons/language.svg";
import { Theme, useTheme } from "app/providers/ThemeProviders";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const onToggleLang = () =>
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");

  return (
    <div className={classNames(cls.LangSwitcher)}>
      <Button onClick={onToggleLang} title={t("langSwitcherBtn")}>
        <LangIcon fill={theme === Theme.DARK ? "#fff" : "#000"} />
      </Button>
    </div>
  );
};
