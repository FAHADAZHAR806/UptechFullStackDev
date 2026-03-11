export default function ResultScreen({ score, total, restart, reviewAnswers }) {
  const percentage = (score / total) * 100;

  let rating = "";
  if (percentage >= 80) rating = "Genius 🧠";
  else if (percentage >= 60) rating = "Very Smart";
  else if (percentage >= 40) rating = "Average";
  else rating = "Needs Improvement";

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-blue-950 font-sans">
      <div className="bg-blue-900/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-sm sm:max-w-md md:max-w-lg w-full text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-100 mb-4 sm:mb-6">
          Result
        </h2>

        <p className="text-blue-200 text-lg sm:text-xl md:text-2xl mb-2">
          Score: <span className="text-white font-semibold">{score}</span> /{" "}
          {total}
        </p>

        <p className="text-blue-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
          Rating: <span className="text-white font-semibold">{rating}</span>
        </p>

        {/* Restart Quiz */}
        <button
          onClick={restart}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 mb-3"
        >
          Restart Here
        </button>

        {/* Review Answers */}
        <button
          onClick={reviewAnswers} // <-- calls App.jsx openReview()
          className="w-full border border-blue-500 text-blue-200 hover:text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
        >
          Review Answers
        </button>
      </div>
    </div>
  );
}
