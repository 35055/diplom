import { useState } from "react";
import { Box, Button, Container, Title } from "@mantine/core";
import { questions } from "../../mock/questions";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setCompleted(false);
  };

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];

    return (
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title
          h="130px"
          ta="center"
          style={{ marginBottom: 40, fontSize: "40px" }}
        >
          {question.question}
        </Title>
        {question.answers.map((answer, index) => (
          <a
            key={index}
            id="btn-quiz"
            onClick={() => handleAnswer(answer.correct)}
          >
            {answer.answer}
          </a>
        ))}
      </Box>
    );
  };

  const renderResult = () => {
    return (
      <div>
        <Title style={{ marginBottom: 20 }}>Результаты теста:</Title>
        <Title style={{ marginBottom: 10 }}>
          Правильных ответов: {correctAnswers}
        </Title>
        <Title style={{ marginBottom: 20 }}>
          Неправильных ответов: {incorrectAnswers}
        </Title>
        <Button w="200px" onClick={resetQuiz} fullWidth variant="outline">
          Пройти тест заново
        </Button>
      </div>
    );
  };

  return (
    <Container size="md">
      <Box p="lg" style={{ marginBottom: 20 }}>
        {completed ? renderResult() : renderQuestion()}
      </Box>
    </Container>
  );
};

export default Quiz;
