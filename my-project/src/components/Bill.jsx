export default function Bill({ totalPrice, items }) {
  return (
    <div className="mt-4 border-t pt-3">
      <h3 className="font-bold text-lg">Bill Summary</h3>

      <p>Total Items: {items}</p>

      <p className="font-bold">Total Cost: ${totalPrice}</p>
    </div>
  );
}
