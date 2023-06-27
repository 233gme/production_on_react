import { type ReactNode } from 'react'
import { render } from '@testing-library/react'
import i18nForTests from 'shared/config/i18n/i18nForTests'
import { I18nextProvider } from 'react-i18next'

export function renderWithTranslation (component: ReactNode): ReactNode {
  return render(
    <I18nextProvider i18n={i18nForTests}>
      {component}
    </I18nextProvider>
  )
}
