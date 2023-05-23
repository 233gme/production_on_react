import { lazy } from 'react'

export const AboutPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // JUST FOR COURSE!
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        resolve(import('./AboutPage'))
      }, 1500)
    })
)
