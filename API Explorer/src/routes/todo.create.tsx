import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { createTodo } from '../api/createTodo'

export default function CreateTodoPage() {
  const [title, setTitle] = useState('')
  const [userId, setUserId] = useState(1)
  const [completed, setCompleted] = useState(false)

  const mutation = useMutation({
    mutationFn: createTodo,
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mutation.mutate({ title, userId, completed })
  }

  return (
    <section className="create-todo-page">
      <h2>Create a new todo</h2>
      <p>This uses a TanStack Query mutation (POST request to JSONPlaceholder).</p>

      <form onSubmit={handleSubmit} className="create-todo-form">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>

        <label>
          User ID:
          <input
            type="number"
            value={userId}
            onChange={(event) => setUserId(Number(event.target.value))}
            min={1}
            required
          />
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={completed}
            onChange={(event) => setCompleted(event.target.checked)}
          />
          Completed
        </label>

        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Creating...' : 'Create Todo'}
        </button>
      </form>

      {mutation.isSuccess && (
        <article className="todo-card">
          <h3>Created successfully!</h3>
          <p><strong>ID:</strong> {mutation.data.id}</p>
          <p><strong>Title:</strong> {mutation.data.title}</p>
          <p><strong>Completed:</strong> {mutation.data.completed ? 'Yes' : 'No'}</p>
          <p>
            JSONPlaceholder simulates creation — it returns the data but does not persist it.
            Go to <Link to="/todo" search={{ id: 1 }}>Fetch Todo</Link> to browse real resources.
          </p>
        </article>
      )}

      {mutation.isError && (
        <p className="error-message">Error: {mutation.error.message}</p>
      )}
    </section>
  )
}
