import { Link } from 'react-router-dom'
import useCounterStore from '../store/useCounterStore.ts'
import ThemeToggle from '../components/ThemeToggle.tsx'

function CounterPage() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  const reset = useCounterStore((state) => state.reset)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-4xl dark:text-white">
          Counter
        </h1>

        <div className="p-6 text-center bg-gray-50 rounded-xl dark:bg-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Current count
          </p>
          <p className="mt-2 text-6xl font-bold text-blue-500 transition-all duration-300">
            {count}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={increment}
            className="flex-1 px-5 py-3 font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-all"
          >
            + Increment
          </button>
          <button
            onClick={decrement}
            className="flex-1 px-5 py-3 font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 transition-all"
          >
            - Decrement
          </button>
          <button
            onClick={reset}
            className="flex-1 px-5 py-3 font-medium text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 transition-all"
          >
            Reset
          </button>
        </div>

        <Link
          to="/"
          className="block px-6 py-3 text-center text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default CounterPage
