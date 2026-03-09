export default function ReviewAnswers({ answers }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Review Answers
        </h2>

        {/* Question Cards */}
        <div className="space-y-4">
          {answers.map((item, index) => {
            const correct = item.selected === item.answer;

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-200"
              >
                <p className="font-semibold text-gray-800 mb-2">
                  {index + 1}. {item.question}
                </p>

                <p className="mb-1">
                  Your Answer:{" "}
                  <span
                    className={`font-medium ${
                      correct ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.selected}
                  </span>
                </p>

                <p>
                  Correct Answer:{" "}
                  <span className="font-medium text-green-700">
                    {item.answer}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
