import { Link } from '@tanstack/react-router'

export default function HomePage() {
  return (
    <section className="home-page">
      <h2>Welcome to API Explorer</h2>
      <p>
        This project demonstrates key features of TanStack Router and TanStack Query
        by interacting with the JSONPlaceholder public API.
      </p>
      <h3>Features demonstrated</h3>
      <ul>
        <li><strong>TanStack Router</strong> — multi-page navigation with search parameters (<code>?id=N</code>)</li>
        <li><strong>TanStack Query</strong> — data fetching with loading/error states</li>
        <li><strong>Cache inspection</strong> — view cached query data directly in the UI</li>
        <li><strong>Mutation</strong> — create new resources via POST requests</li>
      </ul>
    </section>
  )
}
