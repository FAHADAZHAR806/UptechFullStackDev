import Bill from "./Bill";
export default function Cart({ cart, totalPrice }) {
  return (
    <div className="bg-white p-4 rounded shadow w-full md:w-80">
      <h2 className="text-xl font-bold mb-3">Cart</h2>

      {cart.length === 0 ? (
        <p>No items</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="flex justify-between border-b py-1">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))
      )}

      <Bill totalPrice={totalPrice} items={cart.length} />
    </div>
  );
}
