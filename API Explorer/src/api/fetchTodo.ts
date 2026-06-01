import type { Todo } from '../types/todo'

const JSON_PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com'

export async function fetchTodoById(todoId: number): Promise<Todo> {
  const response = await fetch(`${JSON_PLACEHOLDER_API}/todos/${todoId}`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json() as Promise<Todo>
}
