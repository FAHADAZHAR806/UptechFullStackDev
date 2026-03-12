export default function Button({ onclick, text }) {
  return (
    <button
      onClick={onclick}
      className="px-5 py-2 w-full sm:w-24 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
    >
      {text}
    </button>
  );
}
