import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";
import ConfirmModal from "../components/ConfirmModal";
import { useToast, useUsers } from "../App";

/* ─────────────────────────────────────────────
   Users  —  Route: /
   
   NO local fetch here anymore. Users state lives in
   App.jsx (UsersContext) and persists across navigation.
   This page just reads from context and mutates it.
───────────────────────────────────────────── */
export default function Users() {
  const navigate = useNavigate();
  const toast = useToast();

  // ── Read from shared context (no fetch here!) ──
  const { users, loading, error, removeUser } = useUsers();

  // ── Local UI state only ────────────────────
  const [search, setSearch] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  // ── Filtered list ──────────────────────────
  const filtered = users.filter((u) => {
    const q = search.toLowerCase();
    return (
      `${u.firstName} ${u.lastName}`.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q) ||
      (u.phone ?? "").toLowerCase().includes(q)
    );
  });

  // ── Delete flow ────────────────────────────
  function askDelete(user) {
    setDeleteTarget(user);
  }

  async function confirmDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const isLocalUser = deleteTarget.id > 100; // naye users ka id Date.now() hota hai

      if (isLocalUser) {
        // Naya user hai — API call mat karo, seedha list se hata do
        removeUser(deleteTarget.id);
        toast(
          `${deleteTarget.firstName} ${deleteTarget.lastName} deleted`,
          "success",
        );
      } else {
        // Original dummyjson user (id 1-100) — API call karo
        const res = await fetch(
          `https://dummyjson.com/users/${deleteTarget.id}`,
          {
            method: "DELETE",
          },
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        removeUser(deleteTarget.id);
        toast(
          `${deleteTarget.firstName} ${deleteTarget.lastName} deleted`,
          "success",
        );
      }
    } catch (err) {
      toast(`Delete failed: ${err.message}`, "error");
    } finally {
      setDeleting(false);
      setDeleteTarget(null);
    }
  }

  // ── Render ─────────────────────────────────
  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <div className="page-header-left">
          <h1>Users</h1>
          <p>Manage your team members and their information.</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/add-user")}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add New User
        </button>
      </div>

      {/* Stats row */}
      {!loading && !error && (
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-label">Total Users</div>
            <div className="stat-value">{users.length}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Showing</div>
            <div className="stat-value">{filtered.length}</div>
          </div>
        </div>
      )}

      {/* Search */}
      {!loading && !error && (
        <div className="search-wrap">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            className="search-input"
            type="text"
            placeholder="Search by name, email or phone…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      {/* Content */}
      <div className="card">
        {/* Loading */}
        {loading && (
          <div className="state-box">
            <div className="state-icon loading">
              <div className="spinner" />
            </div>
            <div className="state-title">Loading users…</div>
            <div className="state-desc">Fetching from dummyjson.com</div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="state-box">
            <div className="state-icon error">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d03b2f"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div className="state-title">Failed to load users</div>
            <div className="state-desc">{error}</div>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty search result */}
        {!loading && !error && filtered.length === 0 && (
          <div className="state-box">
            <div className="state-icon empty">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-3)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div className="state-title">No results found</div>
            <div className="state-desc">No users match "{search}"</div>
          </div>
        )}

        {/* Table */}
        {!loading && !error && filtered.length > 0 && (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((user) => (
                  <UserCard key={user.id} user={user} onDelete={askDelete} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Confirm delete modal */}
      <ConfirmModal
        isOpen={!!deleteTarget}
        title="Delete User"
        message={`Are you sure you want to delete ${deleteTarget?.firstName} ${deleteTarget?.lastName}? This action cannot be undone.`}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteTarget(null)}
        loading={deleting}
      />
    </>
  );
}
