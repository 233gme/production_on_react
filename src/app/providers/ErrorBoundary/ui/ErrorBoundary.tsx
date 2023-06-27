import React, { type ErrorInfo, type ReactNode, Suspense } from 'react'
import { ErrorPage } from 'widgets/ErrorPage'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary
  extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  // eslint-disable-next-line n/handle-callback-err
  static getDerivedStateFromError (error: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: ErrorInfo): void {
    console.log(error, info.componentStack)
  }

  render (): ReactNode {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback="">
          <ErrorPage />
        </Suspense>
      )
    }

    return children
  }
}

export default ErrorBoundary
