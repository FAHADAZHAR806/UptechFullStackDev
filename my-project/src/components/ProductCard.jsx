export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto mb-3 rounded-lg"
      />

      <h2 className="text-lg font-semibold">{product.name}</h2>

      <p className="text-gray-600 mb-3">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add To Cart
      </button>
    </div>
  );
}
