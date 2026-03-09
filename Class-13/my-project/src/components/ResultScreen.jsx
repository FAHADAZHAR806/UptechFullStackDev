export default function ResultScreen({ score, total, restart }) {
  const percentage = (score / total) * 100;

  let rating = "";

  if (percentage >= 80) rating = "Genius 🧠";
  else if (percentage >= 60) rating = "Very Smart";
  else if (percentage >= 40) rating = "Average";
  else rating = "Needs Improvement";

  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold mb-4">Quiz Result</h2>

      <p className="text-xl mb-2">
        Score: {score} / {total}
      </p>

      <p className="text-lg mb-4">Rating: {rating}</p>

      <button
        onClick={restart}
        className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600"
      >
        Restart Quiz
      </button>
    </div>
  );
}
