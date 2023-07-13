import { type FC, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/Routers'
import { useTheme } from 'app/providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="Loading...">
        <Navbar/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}

export default App
