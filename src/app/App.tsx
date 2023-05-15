import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProviders/lib/ToggleTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/Routers";

import "./styles/index.scss";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>[ZZZ]</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
}

export default App;
