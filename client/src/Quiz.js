import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("/api/getQuestions")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setQuestions(data.data);
      });
  }, []);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <MainWrapper>
      <div class="main">
        {showScore ? (
          <ScoreSection>
            You scored {score} out of {questions.length}
          </ScoreSection>
        ) : (
          <>
            {questions.length > 0 && (
              <>
                <QuestionSection>
                  <QuestionCount>
                    <QuestionCountSpan>
                      Question {currentQuestion + 1}
                    </QuestionCountSpan>
                    /{questions.length}
                  </QuestionCount>
                  <QuestionText>
                    {questions[currentQuestion].questionText}
                  </QuestionText>
                </QuestionSection>
                <AnswerSection>
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption, index) => (
                      <AnswerButton
                        onClick={() =>
                          handleAnswerButtonClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </AnswerButton>
                    )
                  )}
                </AnswerSection>
              </>
            )}
          </>
        )}
      </div>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ScoreSection = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
`;

const QuestionSection = styled.div`
  width: 100%;
  position: relative;
`;

const QuestionCount = styled.div`
  margin-bottom: 20px;
`;

const QuestionCountSpan = styled.span`
  font-size: 28px;
`;

const QuestionText = styled.div`
  margin-bottom: 12px;
`;

const AnswerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
`;

const AnswerButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  background-color: #252d4a;
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: flex-start;
  align-items: center;
  align-items: space-between;
  border: 5px solid #234668;
  cursor: pointer;
  /* create on hover effect */
`;
export default Quiz;
