import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h1>This is dashboard</h1>
      <Link to="profile">Profile</Link>
      <Link to="setting">Setting</Link>
      <Outlet />
    </>
  );
}
