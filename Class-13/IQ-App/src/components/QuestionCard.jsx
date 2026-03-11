export default function QuestionCard({
  question,
  current,
  total,
  selectAnswer,
}) {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center p-4 bg-blue-950 font-sans">
      {/* Card */}
      <div
        className="bg-blue-900/70 backdrop-blur-xl 
      rounded-3xl shadow-2xl 
      p-6 sm:p-8 md:p-10 
      max-w-sm sm:max-w-md md:max-w-lg 
      w-full"
      >
        {/* Question Header */}
        <div className="mb-5 sm:mb-6">
          <h2
            className="text-lg sm:text-xl md:text-2xl 
          font-bold text-blue-100"
          >
            Question {current + 1} of {total}
          </h2>
        </div>

        {/* Question Text */}
        <p
          className="text-blue-200 
        text-base sm:text-lg md:text-xl 
        mb-6 sm:mb-8 leading-relaxed"
        >
          {question.question}
        </p>

        {/* Options */}
        <div className="grid gap-3 sm:gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => selectAnswer(option)}
              className="w-full 
              text-blue-100 font-medium
              p-3 sm:p-4
              rounded-xl
              border border-blue-700
              bg-blue-800/40
              hover:bg-blue-700
              hover:scale-[1.02]
              transition-all duration-200"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
