import type { Todo } from '../types/todo'

const JSON_PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com'

export interface NewTodo {
  title: string
  userId: number
  completed: boolean
}

export async function createTodo(newTodo: NewTodo): Promise<Todo> {
  const response = await fetch(`${JSON_PLACEHOLDER_API}/todos`, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    throw new Error(`Failed to create todo: ${response.status}`)
  }

  return response.json() as Promise<Todo>
}
