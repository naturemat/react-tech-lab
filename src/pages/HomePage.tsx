import { Link } from 'react-router-dom'
import useCounterStore from '../store/useCounterStore.ts'
import ThemeToggle from '../components/ThemeToggle.tsx'

function HomePage() {
  const count = useCounterStore((state) => state.count)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-4xl dark:text-white">
          Counter Navigator
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300">
          A two-page counter app built with Zustand, Tailwind CSS, and React Router
        </p>

        <div className="p-4 text-center bg-gray-50 rounded-xl dark:bg-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Global counter value (shared across pages)
          </p>
          <p className="mt-1 text-4xl font-bold text-blue-500">
            {count}
          </p>
        </div>

        <Link
          to="/counter"
          className="block px-6 py-3 text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all"
        >
          Go to Counter
        </Link>
      </div>
    </div>
  )
}

export default HomePage
