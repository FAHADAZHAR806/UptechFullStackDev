import { useState } from "react";
import { questions } from "./data/questions";
import { getRandomQuestions } from "./utils/shuffle";

import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import ReviewAnswers from "./components/ReviewAnswers";

export default function App() {
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [reviewing, setReviewing] = useState(false);

  const startQuiz = () => {
    const random = getRandomQuestions(questions, 10);
    setQuiz(random);
    setStarted(true);
    setFinished(false);
    setReviewing(false);
    setIndex(0);
    setAnswers([]);
  };

  const selectAnswer = (option) => {
    const q = quiz[index];

    const record = {
      question: q.question,
      selected: option,
      answer: q.answer,
    };

    setAnswers([...answers, record]);

    if (index + 1 < quiz.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  const score = answers.filter((a) => a.selected === a.answer).length;

  const restartQuiz = () => {
    startQuiz();
  };

  const openReview = () => {
    setReviewing(true);
  };

  const backToResult = () => {
    setReviewing(false);
  };

  // Screen logic
  if (!started) return <StartScreen startQuiz={startQuiz} />;

  if (finished && !reviewing)
    return (
      <ResultScreen
        score={score}
        total={quiz.length}
        restart={restartQuiz}
        reviewAnswers={openReview} // opens ReviewAnswers screen
      />
    );

  if (reviewing)
    return <ReviewAnswers answers={answers} goBack={backToResult} />; // <-- back to result

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <QuestionCard
        question={quiz[index]}
        current={index}
        total={quiz.length}
        selectAnswer={selectAnswer}
      />
    </div>
  );
}
