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

  const startQuiz = () => {
    const random = getRandomQuestions(questions, 10);
    setQuiz(random);
    setStarted(true);
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
    const random = getRandomQuestions(questions, 10);

    setQuiz(random);
    setIndex(0);
    setAnswers([]);
    setFinished(false);
  };

  if (!started) return <StartScreen startQuiz={startQuiz} />;

  if (finished)
    return (
      <div className="p-6">
        <ResultScreen score={score} total={quiz.length} restart={restartQuiz} />
        <ReviewAnswers answers={answers} />
      </div>
    );
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
