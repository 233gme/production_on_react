import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // JUST FOR COURSE!
      setTimeout(() => resolve(import("./MainPage")), 500);
    })
);
