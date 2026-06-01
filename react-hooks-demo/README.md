# React Hooks Demo

## Description

This project is a React 19 playground built with Vite to explore different React hooks. The app automatically loads examples from `src/hooks/` and lets you select each demo from a menu.

## Project structure

- `package.json`: development dependencies and scripts.
- `vite.config.js`: Vite configuration for the development server and build.
- `eslint.config.js`: ESLint rules to keep the code clean.
- `public/`: static assets served directly.
- `src/`: application source code.
  - `main.jsx`: entry point that mounts the `App` component.
  - `App.jsx`: main component that loads demos and handles selection.
  - `components/Menu.jsx`: navigation menu for choosing the active demo.
  - `hooks/`: folder containing all hook demos organized by category.

## How it works

1. `App.jsx` uses `import.meta.glob('./hooks/**/*.jsx', { eager: true })` to dynamically import all demos.
2. Each file in `src/hooks/` exports a default component that demonstrates a hook example.
3. `App.jsx` builds a list of demos with `id`, `label`, and the associated component.
4. The menu in `src/components/Menu.jsx` creates a button for each demo and allows switching the active demo.
5. When a demo is selected, `App.jsx` renders the corresponding component.

## Included demo categories

- `state/`: `useState`, `useReducer`.
- `effects/`: `useEffect`, `useLayoutEffect`, `useInsertionEffect`.
- `refs/`: `useRef`, `useImperativeHandle`.
- `context/`: `useContext`.
- `performance/`: `useMemo`, `useCallback`, `useDeferredValue`, `useTransition`.
- `advanced/`: `useDebugValue`, `useId`, `useSyncExternalStore`, `useOptimistic`, `use`.
- `react-dom/`: `useFormStatus`.

## Available scripts

From the `react-hooks-demo` folder:

- `npm install`: install dependencies.
- `npm run dev`: start the development server.
- `npm run build`: build the app for production.
- `npm run preview`: preview the production build.
- `npm run lint`: run ESLint on the project.

## How to add a new demo

1. Create a new `.jsx` component inside `src/hooks/` or a subfolder.
2. Export the component as `default`.
3. The file name is used to generate the button label (the `Demo` suffix is removed).
4. The demo will be included automatically without changing `App.jsx`.

## Notes

- The project is configured for React 19 and Vite.
- Dynamic demo loading makes it easy to add or move files.
- Use the menu in the UI to navigate between hook examples.
