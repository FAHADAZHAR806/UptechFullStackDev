import { Routes, Route } from "react-router-dom";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import Topbar from "./components/Topbar";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

/* ═══════════════════════════════════════════════
   TOAST CONTEXT
   Any page can call:  const toast = useToast()
                       toast("Done!", "success")
═══════════════════════════════════════════════ */
export const ToastContext = createContext(null);
export function useToast() {
  return useContext(ToastContext);
}

/* ═══════════════════════════════════════════════
   USERS CONTEXT  ← THE KEY FIX
   
   WHY THIS FIXES THE BLANK UI:
   Before: Users.jsx fetched data itself. Every time
   you navigated back to "/" the component unmounted
   and remounted, losing all local state and re-fetching
   from the API — which doesn't actually save your changes.
   
   Now: users state lives HERE in App, outside the router.
   It fetches ONCE, stays alive forever, and any page can
   read or mutate it. Navigate away and back = same data.
═══════════════════════════════════════════════ */
export const UsersContext = createContext(null);
export function useUsers() {
  return useContext(UsersContext);
}

function AppProviders({ children }) {
  // ── Toast state ──────────────────────────────
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "default") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, exit: true } : t)),
      );
      setTimeout(
        () => setToasts((prev) => prev.filter((t) => t.id !== id)),
        350,
      );
    }, 3000);
  }, []);

  // ── Users state — fetched ONCE, shared globally ──
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://dummyjson.com/users?limit=30")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setUsers(data.users ?? []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // ← runs once when the app starts, never again

  // Helpers that pages call to mutate the shared list
  const addUser = useCallback(
    (user) => setUsers((prev) => [user, ...prev]),
    [],
  );
  const removeUser = useCallback(
    (id) => setUsers((prev) => prev.filter((u) => u.id !== id)),
    [],
  );
  const updateUser = useCallback(
    (updated) =>
      setUsers((prev) =>
        prev.map((u) => (u.id === updated.id ? { ...u, ...updated } : u)),
      ),
    [],
  );

  return (
    <ToastContext.Provider value={addToast}>
      <UsersContext.Provider
        value={{ users, loading, error, addUser, removeUser, updateUser }}
      >
        {children}

        {/* Toast notifications */}
        <div className="toast-container">
          {toasts.map((t) => (
            <div
              key={t.id}
              className={`toast ${t.type} ${t.exit ? "exit" : ""}`}
            >
              {t.type === "success" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
              {t.type === "error" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              )}
              {t.message}
            </div>
          ))}
        </div>
      </UsersContext.Provider>
    </ToastContext.Provider>
  );
}

/* ─── App ─────────────────────────────────── */
export default function App() {
  return (
    <AppProviders>
      <div className="app-shell">
        <Topbar />
        <main className="page-container">
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
          </Routes>
        </main>
      </div>
    </AppProviders>
  );
}
