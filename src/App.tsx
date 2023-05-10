import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./styles/index.scss";

import MainPage from "./pages/Main";
import AboutPage from "./pages/About";
import { useTheme } from "./theme/ToggleTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>ZZZ</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
