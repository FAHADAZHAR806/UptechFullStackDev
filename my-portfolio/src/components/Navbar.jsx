import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/product">Product</Link>
        <Link to="/products">Products</Link>
      </div>
    </>
  );
}
