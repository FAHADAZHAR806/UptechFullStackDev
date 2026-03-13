import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // useEffect runs when component mounts
  useEffect(() => {
    const productData = [
      {
        id: 1,
        name: "Laptop",
        price: 1200,
        image: "https://via.placeholder.com/200",
      },
      {
        id: 2,
        name: "Phone",
        price: 800,
        image: "https://via.placeholder.com/200",
      },
      {
        id: 3,
        name: "Headphones",
        price: 200,
        image: "https://via.placeholder.com/200",
      },
      {
        id: 4,
        name: "Keyboard",
        price: 150,
        image: "https://via.placeholder.com/200",
      },
    ];

    setProducts(productData);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Product Store</h1>

      <Cart cartCount={cart.length} />

      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default App;
