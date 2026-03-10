export default function ReviewAnswers({ answers, goBack }) {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-blue-950 font-sans">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-100 mb-6 sm:mb-8 text-center">
        Review Answers
      </h2>

      {/* Question Cards */}
      <div className="w-full max-w-md space-y-4">
        {answers.map((item, index) => {
          const correct = item.selected === item.answer;

          return (
            <div
              key={index}
              className="bg-blue-900/70 p-4 sm:p-6 rounded-2xl shadow-inner border border-blue-700"
            >
              {/* Question */}
              <p className="font-semibold text-blue-200 mb-2">
                {index + 1}. {item.question}
              </p>

              {/* User Answer */}
              <p className="mb-1">
                Your Answer:{" "}
                <span
                  className={`font-medium ${
                    correct ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {item.selected}
                </span>
              </p>

              {/* Correct Answer */}
              {!correct && (
                <p>
                  Correct Answer:{" "}
                  <span className="font-medium text-green-300">
                    {item.answer}
                  </span>
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Back to Result Button */}
      <button
        onClick={goBack}
        className="mt-6 w-full max-w-md bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
      >
        Back to Result
      </button>
    </div>
  );
}
