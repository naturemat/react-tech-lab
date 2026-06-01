# API Explorer

Educational project that explores key features of TanStack Router and TanStack Query using the [JSONPlaceholder](https://jsonplaceholder.typicode.com) public API in a React + Vite + TypeScript app.

## Features

- **Navigation** — multi-page routing with TanStack Router (Home, Fetch Todo, Create Todo)
- **Search parameters** — select which todo to fetch via URL query string (`/todo?id=N`)
- **Data fetching** — TanStack Query `useQuery` for GET requests with loading/error states
- **Mutation** — TanStack Query `useMutation` for POST requests (create a new todo)
- **Cache inspection** — view cached query data directly in the UI and via React Query DevTools

## Technology Stack

- [React](https://react.dev) — UI library
- [Vite](https://vite.dev) — Build tool
- [TypeScript](https://www.typescriptlang.org) — Type safety
- [TanStack Router](https://tanstack.com/router) — Type-safe routing with search parameters
- [TanStack Query](https://tanstack.com/query) — Server state management (fetching, caching, mutations)
- [TanStack Query DevTools](https://tanstack.com/query/latest/docs/react/devtools) — Cache inspector

## How to run

```bash
cd "API Explorer"
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).
