import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>

      <Link to="/product/1/Laptop">Laptop</Link>
      <br />

      <Link to="/product/2/Mobile">Mobile</Link>
      <br />

      <Link to="/product/3/Watch">Watch</Link>
    </div>
  );
}
