export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold">{product.name}</h2>

      <p className="text-gray-600">${product.price}</p>

      <img
        src={product.img}
        alt={product.name}
        className="w-full h-60 object-cover  rounded"
      />
      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add To Cart
      </button>
    </div>
  );
}
