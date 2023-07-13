import { type Story } from '@storybook/react'
import { type Theme, ThemeProvider } from 'app/providers/ThemeProvider'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
)
