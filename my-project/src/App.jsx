import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./data/product";
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cart.length} />

      <div className="flex flex-col md:flex-row p-6 gap-6">
        <ProductList products={products} addToCart={addToCart} />

        <Cart cart={cart} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default App;
