import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserForm from "../components/UserForm";
import { useToast, useUsers } from "../App";

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  _touched: {},
};

export default function AddUser() {
  const navigate = useNavigate();
  const toast = useToast();
  const { addUser } = useUsers(); // ← shared context

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      _touched: { ...prev._touched, [name]: true },
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setFormData((prev) => ({
      ...prev,
      _touched: { firstName: true, lastName: true, email: true, phone: true },
    }));

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim()
    ) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const created = await res.json();

      // ✅ Add to the SHARED list immediately — list page will show it
      // dummyjson returns id:101 for every new user (fake API), so we
      // assign a unique id using Date.now() to avoid key collisions.
      addUser({ ...created, id: created.id ?? Date.now() });

      toast(
        `${created.firstName} ${created.lastName} added successfully!`,
        "success",
      );
      navigate("/");
    } catch (err) {
      toast(`Failed to add user: ${err.message}`, "error");
    } finally {
      setLoading(false);
    }
  }

  // ── Render ─────────────────────────────────
  return (
    <>
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Users</Link>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <span>Add New User</span>
      </nav>

      {/* Page header */}
      <div className="page-header">
        <div className="page-header-left">
          <h1>Add New User</h1>
          <p>Fill in the details below to create a new team member.</p>
        </div>
      </div>

      {/* Form card */}
      <div className="card form-card">
        <div className="form-header">
          <h2>User Information</h2>
          <p>All fields marked with * are required.</p>
        </div>

        <UserForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          loading={loading}
          submitLabel="Add User"
          onCancel={() => navigate("/")}
        />
      </div>
    </>
  );
}
