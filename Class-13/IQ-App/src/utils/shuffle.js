export const getRandomQuestions = (questions, count = 15) => {
  return [...questions].sort(() => Math.random() - 0.5).slice(0, count);
};
