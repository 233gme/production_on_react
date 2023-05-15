import { useTheme } from "app/providers/ThemeProviders/lib/ToggleTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/Routers";
import { Navbar } from "widgets/Navbar";

import "./styles/index.scss";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>[ZZZ]</button>
      <AppRouter />
    </div>
  );
}

export default App;
