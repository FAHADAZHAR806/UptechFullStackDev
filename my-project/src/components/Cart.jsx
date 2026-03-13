export default function Cart({ cartCount }) {
  return (
    <div className="flex justify-end mb-4">
      <div className="bg-black text-white px-4 py-2 rounded-lg">
        Cart Items: {cartCount}
      </div>
    </div>
  );
}
