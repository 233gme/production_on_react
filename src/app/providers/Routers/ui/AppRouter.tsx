import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<div className="page-wrapper">{element}</div>}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;
