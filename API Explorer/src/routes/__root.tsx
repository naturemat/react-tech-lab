import { Link, Outlet } from '@tanstack/react-router'

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header className="app-header">
        <Link to="/" className="app-logo"><h1>API Explorer</h1></Link>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/todo" search={{ id: 1 }} className="nav-link">Fetch Todo</Link>
          <Link to="/todo/create" className="nav-link">Create Todo</Link>
        </nav>
      </header>
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}
