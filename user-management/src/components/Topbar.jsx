import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link to="/" className="topbar-logo">
          {/* Users icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          UserBase
        </Link>

        <span className="topbar-pill">dummyjson.com/users</span>
      </div>
    </header>
  )
}
