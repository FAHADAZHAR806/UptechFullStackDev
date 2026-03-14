export default function Navbar({ cartCount }) {
  return (
    <div className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Mini Store</h1>

      <div>
        Cart Items: <span className="font-bold">{cartCount}</span>
      </div>
    </div>
  );
}
