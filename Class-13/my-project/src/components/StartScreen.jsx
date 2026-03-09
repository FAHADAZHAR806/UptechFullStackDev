export default function StartScreen({ startQuiz }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 p-4">
      {/* Card container */}
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl text-center max-w-sm sm:max-w-md md:max-w-lg w-full flex flex-col items-center justify-center">
        {/* Title */}
        <h1 className="text-3xl font-extrabold mb-4 sm:mb-6 text-gray-800">
          General Knowledge Quiz
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
          Test your knowledge with 10 randomly selected questions from a set of
          50 general knowledge questions. Select the correct option and discover
          your intelligence level!
        </p>

        {/* Start Button */}
        <button
          onClick={startQuiz}
          className="bg-blue-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
