import { useContext } from "react";
import {
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  Theme,
} from "app/providers/ThemeProviders";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {theme, toggleTheme}
}
