import { useNavigate } from 'react-router-dom'

/* ─────────────────────────────────────────────
   UserCard  — renders a single <tr> in the table
   Props:
     user      – user object
     onDelete  – (user) => void  (triggers confirm modal)
───────────────────────────────────────────── */
export default function UserCard({ user, onDelete }) {
  const navigate = useNavigate()

  // Build initials from first + last name
  const initials = `${user.firstName?.[0] ?? ''}${user.lastName?.[0] ?? ''}`.toUpperCase()

  return (
    <tr>
      {/* Name + avatar */}
      <td>
        <div className="user-cell">
          <div className="avatar">{initials}</div>
          <div className="user-cell-info">
            <span className="user-cell-name">{user.firstName} {user.lastName}</span>
            <span className="user-cell-id">#{user.id}</span>
          </div>
        </div>
      </td>

      {/* Email */}
      <td style={{ color: 'var(--text-2)' }}>{user.email}</td>

      {/* Phone */}
      <td style={{ color: 'var(--text-2)', fontFamily: 'var(--mono)', fontSize: 13 }}>
        {user.phone}
      </td>

      {/* Actions */}
      <td>
        <div className="action-row">
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => navigate(`/edit-user/${user.id}`)}
            title="Edit user"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(user)}
            title="Delete user"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14H6L5 6"/>
              <path d="M10 11v6"/><path d="M14 11v6"/>
              <path d="M9 6V4h6v2"/>
            </svg>
            Delete
          </button>
        </div>
      </td>
    </tr>
  )
}
