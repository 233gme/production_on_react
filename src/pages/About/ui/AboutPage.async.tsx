import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // JUST FOR COURSE!
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
