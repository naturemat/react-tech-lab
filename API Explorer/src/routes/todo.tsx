import { useQuery } from '@tanstack/react-query'
import { fetchTodoById } from '../api/fetchTodo'

export default function TodoPage() {
  const TODO_ID = 1

  const { data: todo, isLoading, isError, error } = useQuery({
    queryKey: ['todo', TODO_ID],
    queryFn: () => fetchTodoById(TODO_ID),
  })

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
    <article className="todo-card">
      <h2>Todo #{todo.id}</h2>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
    </article>
  )
}
