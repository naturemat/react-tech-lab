import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import RootLayout from './routes/__root'
import HomePage from './routes/index'
import TodoPage from './routes/todo'

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
  component: TodoPage,
})

const routeTree = rootRoute.addChildren([homeRoute, todoRoute])

export const router = createRouter({ routeTree })
