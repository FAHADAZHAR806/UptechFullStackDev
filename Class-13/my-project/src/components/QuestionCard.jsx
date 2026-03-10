export default function QuestionCard({
  question,
  current,
  total,
  selectAnswer,
}) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#3a3a3a]">
      <div className="bg-[#4a4a4a] rounded-3xl shadow-2xl p-8 max-w-lg w-full">
        {/* Question Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold bg-[#3a3a3a] text-transparent bg-clip-text text-white">
            Question {current + 1} of {total}
          </h2>
        </div>

        {/* Question Text */}
        <p className="text-white text-lg mb-8">{question.question}</p>

        {/* Options */}
        <div className="grid gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => selectAnswer(option)}
              className="w-full text-white font-medium p-4 rounded-xl border border-gray-200 shadow-sm hover:bg-purple-50 hover:scale-105 transition-transform duration-200"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
