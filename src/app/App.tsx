import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/Routers";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { useTheme } from "./providers/ThemeProviders";

import "./styles/index.scss";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <ThemeSwitcher />
      <AppRouter />
    </div>
  );
}

export default App;
