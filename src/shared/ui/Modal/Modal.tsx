import React, { type FC, type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import Portal from 'shared/ui/Portal/Portal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const ANIMATION_DELAY: number = 300

const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const mods: Record<string, boolean | undefined> = { [cls.opened]: isOpen, [cls.isClosing]: isClosing }
  const onContentClick = () => (event: MouseEvent) => { event.preventDefault() }
  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onCloseHandler()
    }
  }, [onCloseHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods)}>
        <div onClick={onCloseHandler} className={cls.overlay}>
          <div onClick={onContentClick} className={cls.content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default Modal
