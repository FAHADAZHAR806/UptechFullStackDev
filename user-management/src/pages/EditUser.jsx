import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import UserForm from '../components/UserForm'
import { useToast, useUsers } from '../App'

/* ─────────────────────────────────────────────
   EditUser  —  Route: /edit-user/:id
   1. Read :id from URL via useParams()
   2. Try to find the user in shared context first
      (avoids a network call if we already have data)
      Falls back to API fetch if needed.
   3. On submit → PUT /users/:id → updateUser() in
      shared context → navigate('/')
───────────────────────────────────────────── */
export default function EditUser() {
  const { id }           = useParams()
  const navigate         = useNavigate()
  const toast            = useToast()
  const { users, updateUser } = useUsers()   // ← shared context

  const [formData, setFormData]         = useState({ firstName:'', lastName:'', email:'', phone:'', _touched:{} })
  const [fetchLoading, setFetchLoading] = useState(true)
  const [fetchError,   setFetchError]   = useState(null)
  const [saveLoading,  setSaveLoading]  = useState(false)
  const [originalName, setOriginalName] = useState('')

  // ── Populate form ──────────────────────────
  // First try the shared users array (instant, no API call).
  // If not found there (e.g. direct URL), fall back to API fetch.
  useEffect(() => {
    const numId = Number(id)

    // Try context first
    const existing = users.find(u => u.id === numId)
    if (existing) {
      setFormData({
        firstName: existing.firstName ?? '',
        lastName:  existing.lastName  ?? '',
        email:     existing.email     ?? '',
        phone:     existing.phone     ?? '',
        _touched:  {},
      })
      setOriginalName(`${existing.firstName} ${existing.lastName}`)
      setFetchLoading(false)
      return
    }

    // Fallback: fetch from API
    let cancelled = false
    setFetchLoading(true)
    setFetchError(null)

    fetch(`https://dummyjson.com/users/${id}`)
      .then(res => {
        if (!res.ok) throw new Error(`User not found (HTTP ${res.status})`)
        return res.json()
      })
      .then(user => {
        if (!cancelled) {
          setFormData({
            firstName: user.firstName ?? '',
            lastName:  user.lastName  ?? '',
            email:     user.email     ?? '',
            phone:     user.phone     ?? '',
            _touched:  {},
          })
          setOriginalName(`${user.firstName} ${user.lastName}`)
          setFetchLoading(false)
        }
      })
      .catch(err => {
        if (!cancelled) {
          setFetchError(err.message)
          setFetchLoading(false)
        }
      })

    return () => { cancelled = true }
  }, [id, users])

  // ── Handle field change ────────────────────
  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
      _touched: { ...prev._touched, [name]: true },
    }))
  }

  // ── Handle submit ──────────────────────────
  async function handleSubmit(e) {
    e.preventDefault()

    setFormData(prev => ({
      ...prev,
      _touched: { firstName: true, lastName: true, email: true, phone: true },
    }))

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      return
    }

    setSaveLoading(true)
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}`, {
        method:  'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName:  formData.lastName.trim(),
          email:     formData.email.trim(),
          phone:     formData.phone.trim(),
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const updated = await res.json()

      // ✅ Update the SHARED list — list page reflects changes instantly
      updateUser({ id: Number(id), ...updated })

      toast(`${updated.firstName} ${updated.lastName} updated successfully!`, 'success')
      navigate('/')
    } catch (err) {
      toast(`Failed to update user: ${err.message}`, 'error')
    } finally {
      setSaveLoading(false)
    }
  }

  // ── Render: loading ────────────────────────
  if (fetchLoading) {
    return (
      <div className="card" style={{ marginTop: 24 }}>
        <div className="state-box">
          <div className="state-icon loading">
            <div className="spinner" />
          </div>
          <div className="state-title">Loading user…</div>
          <div className="state-desc">Fetching user #{id}</div>
        </div>
      </div>
    )
  }

  // ── Render: error ──────────────────────────
  if (fetchError) {
    return (
      <>
        <nav className="breadcrumb">
          <Link to="/">Users</Link>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
          <span>Edit User</span>
        </nav>
        <div className="card" style={{ marginTop: 8 }}>
          <div className="state-box">
            <div className="state-icon error">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="#d03b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div className="state-title">User not found</div>
            <div className="state-desc">{fetchError}</div>
            <button className="btn btn-secondary btn-sm" onClick={() => navigate('/')}>
              Back to Users
            </button>
          </div>
        </div>
      </>
    )
  }

  // ── Render: form ───────────────────────────
  return (
    <>
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Users</Link>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
        <span>Edit {originalName}</span>
      </nav>

      {/* Page header */}
      <div className="page-header">
        <div className="page-header-left">
          <h1>Edit User</h1>
          <p>Update the information for <strong>{originalName}</strong> (ID: {id})</p>
        </div>

        <span className="badge badge-blue">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" style={{ marginRight: 4 }}>
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          Editing #{id}
        </span>
      </div>

      {/* Form card */}
      <div className="card form-card">
        <div className="form-header">
          <h2>Update User Information</h2>
          <p>Changes will be sent to the API via PUT request.</p>
        </div>

        <UserForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          loading={saveLoading}
          submitLabel="Save Changes"
          onCancel={() => navigate('/')}
        />
      </div>
    </>
  )
}
