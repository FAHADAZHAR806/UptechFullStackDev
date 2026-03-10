export default function StartScreen({ startQuiz }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#3a3a3a] "></div>

      {/* Decorative Blur Circles */}
      <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>

      {/* Card */}
      <div className="relative bg-[#2a2a2a] backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl text-center max-w-sm sm:max-w-md md:max-w-lg w-full flex flex-col items-center">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-white">
          General Knowledge Quiz
        </h1>

        {/* Description */}
        <p className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
          Test your knowledge with{" "}
          <span className="font-semibold">10 random questions</span>
          selected from a set of{" "}
          <span className="font-semibold">50 general knowledge questions</span>.
          Choose the correct option and see how smart you really are!
        </p>

        {/* Button */}
        <button
          onClick={startQuiz}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-lg hover:scale-105 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
