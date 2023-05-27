import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  test('render Sidebar', () => {
    render(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle Sidebar', () => {
    render(<Sidebar/>)
    const toggleBtn = screen.getByTestId('sidebar-toggle-btn')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
