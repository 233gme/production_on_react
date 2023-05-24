import { lazy } from 'react'

export const MainPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // JUST FOR COURSE!
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./MainPage'))
      }, 500)
    })
)
