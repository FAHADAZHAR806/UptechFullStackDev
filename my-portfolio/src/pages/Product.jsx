import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id, name } = useParams();
  return (
    <>
      <h1>Product Detail</h1>

      <p>Product ID: {id}</p>
      <p>Product Name: {name}</p>
    </>
  );
}
