import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Sidebar', () => {
  test('render Sidebar', () => {
    componentRender(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle Sidebar', () => {
    componentRender(<Sidebar/>)
    const toggleBtn = screen.getByTestId('sidebar-toggle-btn')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
