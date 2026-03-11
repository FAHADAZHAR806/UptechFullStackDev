export default function StartScreen({ startQuiz }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-4 font-sans">
      {/* Background */}
      <div className="absolute inset-0 bg-blue-950"></div>

      {/* Decorative blurred circles */}
      <div className="absolute w-60 h-60 sm:w-72 sm:h-72 bg-blue-600 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-60 h-60 sm:w-72 sm:h-72 bg-blue-400 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>

      {/* Card */}
      <div
        className="relative bg-blue-900/70 backdrop-blur-xl 
      p-6 sm:p-8 md:p-10 
      rounded-3xl shadow-2xl 
      text-center 
      max-w-sm sm:max-w-md md:max-w-lg 
      w-full flex flex-col items-center"
      >
        {/* Title */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl 
        font-bold tracking-tight 
        mb-4 sm:mb-6 text-blue-100"
        >
          Challenge Your Mind
        </h1>

        {/* Description */}
        <p
          className="text-blue-200 text-sm sm:text-base md:text-lg 
  mb-6 sm:mb-8 leading-relaxed"
        >
          Challenge your mind with{" "}
          <span className="font-semibold text-white">
            15 randomly selected questions
          </span>
          . Choose the correct option for each one and discover how sharp your{" "}
          <span className="font-semibold text-white">
            knowledge and thinking skills
          </span>{" "}
          really are! 🧠✨
        </p>

        {/* Button */}
        <button
          onClick={startQuiz}
          className="bg-blue-500 hover:bg-blue-600
          text-white font-semibold
          px-6 sm:px-8 py-2 sm:py-3
          rounded-xl shadow-lg
          transition-all duration-300
          hover:scale-105"
        >
          Start Here
        </button>
      </div>
    </div>
  );
}
