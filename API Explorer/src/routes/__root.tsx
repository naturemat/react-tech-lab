import { Link, Outlet } from '@tanstack/react-router'

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header className="app-header">
        <h1>API Explorer</h1>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/todo" className="nav-link">View Todo</Link>
        </nav>
      </header>
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}
