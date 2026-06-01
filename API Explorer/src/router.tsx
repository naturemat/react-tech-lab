import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import RootLayout from './routes/__root'
import HomePage from './routes/index'
import TodoPage from './routes/todo'
import CreateTodoPage from './routes/todo.create'

const rootRoute = createRootRoute({
  component: RootLayout,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const todoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/todo',
  validateSearch: (search: Record<string, unknown>) => ({
    id: Number(search.id ?? 1),
  }),
  component: TodoPage,
})

const createTodoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/todo/create',
  component: CreateTodoPage,
})

const routeTree = rootRoute.addChildren([homeRoute, todoRoute, createTodoRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
