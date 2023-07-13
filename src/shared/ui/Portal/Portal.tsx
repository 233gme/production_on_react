import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  element?: HTMLElement
  children: ReactNode
}

const Portal = ({
  children,
  element = document.body
}: PortalProps) => {
  console.log(document)
  return createPortal(children, element)
}

export default Portal
