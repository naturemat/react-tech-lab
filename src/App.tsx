import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import useThemeStore from './store/useThemeStore.ts'
import HomePage from './pages/HomePage.tsx'
import CounterPage from './pages/CounterPage.tsx'

function App() {
  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
