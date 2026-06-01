import { getRouteApi, Link } from '@tanstack/react-router'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchTodoById } from '../api/fetchTodo'

const todoRouteApi = getRouteApi('/todo')

export default function TodoPage() {
  const { id } = todoRouteApi.useSearch()
  const queryClient = useQueryClient()

  const { data: todo, isLoading, isError, error, isStale } = useQuery({
    queryKey: ['todo', id],
    queryFn: () => fetchTodoById(id),
  })

  const allCachedQueries = queryClient.getQueriesData({ queryKey: ['todo'] })

  if (isLoading) {
    return <p className="loading-message">Loading todo...</p>
  }

  if (isError) {
    return <p className="error-message">Error: {error.message}</p>
  }

  if (!todo) {
    return <p className="loading-message">No todo data available</p>
  }

  return (
    <div className="todo-page">
      <article className="todo-card">
        <h2>Todo #{todo.id}</h2>
        <p><strong>Title:</strong> {todo.title}</p>
        <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
        <p><strong>User ID:</strong> {todo.userId}</p>
        <p className="cache-indicator">
          Status: {isStale ? '⚠ stale (will refetch)' : '✓ fresh in cache'}
        </p>
      </article>

      <div className="todo-navigation">
        <Link to="/todo" search={{ id: id - 1 }} className={id <= 1 ? 'nav-link disabled' : 'nav-link'}>
          ← Previous
        </Link>
        <span className="todo-counter">Todo {id}</span>
        <Link to="/todo" search={{ id: id + 1 }} className="nav-link">
          Next →
        </Link>
      </div>

      <details className="cache-inspector">
        <summary>Query Cache (TanStack Query)</summary>
        <p className="cache-summary">
          <strong>Total cached queries:</strong> {allCachedQueries.length}
        </p>
        <ul>
          {allCachedQueries.map(([queryKey, cachedData]) => (
            <li key={String(queryKey)}>
              <code>{JSON.stringify(queryKey)}</code>
              {cachedData ? (
                <pre>{JSON.stringify(cachedData, null, 2)}</pre>
              ) : (
                <span> — no data cached</span>
              )}
            </li>
          ))}
        </ul>
      </details>
    </div>
  )
}
