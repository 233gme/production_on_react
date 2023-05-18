import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/Routers";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./providers/ThemeProviders";
import { Sidebar } from "widgets/Sidebar";

import "./styles/index.scss";
import { Suspense } from "react";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
