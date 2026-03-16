/* ─────────────────────────────────────────────
   UserForm  — reusable controlled form
   Used by both AddUser and EditUser pages.

   Props:
     formData     – { firstName, lastName, email, phone }
     onChange     – (e) => void
     onSubmit     – (e) => void
     loading      – boolean
     submitLabel  – string  (e.g. "Add User" / "Save Changes")
     onCancel     – () => void
───────────────────────────────────────────── */
export default function UserForm({ formData, onChange, onSubmit, loading, submitLabel, onCancel }) {
  // Simple inline validation feedback
  const errors = {}
  if (formData._touched?.firstName && !formData.firstName.trim()) {
    errors.firstName = 'First name is required'
  }
  if (formData._touched?.lastName && !formData.lastName.trim()) {
    errors.lastName = 'Last name is required'
  }
  if (formData._touched?.email && !formData.email.trim()) {
    errors.email = 'Email is required'
  } else if (formData._touched?.email && !/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Enter a valid email address'
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="form-grid">

        {/* First Name */}
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={onChange}
            placeholder="e.g. John"
            className={errors.firstName ? 'error' : ''}
            autoComplete="given-name"
          />
          {errors.firstName && <span className="field-error">{errors.firstName}</span>}
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={onChange}
            placeholder="e.g. Doe"
            className={errors.lastName ? 'error' : ''}
            autoComplete="family-name"
          />
          {errors.lastName && <span className="field-error">{errors.lastName}</span>}
        </div>

        {/* Email (full width) */}
        <div className="form-group full">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            placeholder="e.g. john@example.com"
            className={errors.email ? 'error' : ''}
            autoComplete="email"
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        {/* Phone (full width) */}
        <div className="form-group full">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={onChange}
            placeholder="e.g. +1 (555) 000-0000"
            autoComplete="tel"
          />
        </div>

      </div>

      {/* Footer actions */}
      <div className="form-footer">
        <button type="button" className="btn btn-secondary" onClick={onCancel} disabled={loading}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading
            ? <><span className="spinner" style={{ width: 14, height: 14, borderTopColor: '#fff', borderColor: 'rgba(255,255,255,.3)' }} /> Saving…</>
            : <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {submitLabel}
              </>
          }
        </button>
      </div>
    </form>
  )
}
