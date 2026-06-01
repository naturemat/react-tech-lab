import { Link } from '@tanstack/react-router'

export default function HomePage() {
  return (
    <section className="home-page">
      <h2>Welcome to API Explorer</h2>
      <p>
        This project demonstrates how to fetch data from a public API and
        display it in a React app using TanStack Router and TanStack Query.
      </p>
      <ul>
        <li><strong>TanStack Router</strong> handles navigation between pages.</li>
        <li><strong>TanStack Query</strong> handles data fetching, loading, and error states.</li>
      </ul>
      <Link to="/todo" className="nav-link">View a fetched todo</Link>
    </section>
  )
}
