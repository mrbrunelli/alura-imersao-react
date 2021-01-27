import { useState, useEffect } from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Container from '../src/components/Container';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import PlayButton from '../src/components/PlayButton';
import PlayInput from '../src/components/PlayInput';
import Wrapper from '../src/components/Wrapper';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
  const questionId = `question__${questionIndex + 1}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, i) => {
            const alternativeId = `alternative__${i}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  id={alternativeId}
                  type="radio"
                  name={questionId}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          {/* <pre>{JSON.stringify(question, null, 4) debug loco}</pre> debug loco */}
          <PlayButton type="submit">
            Confirmar
          </PlayButton>
        </form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function Quiz() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Container>
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            question={question}
            onSubmit={handleSubmitQuiz}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && <div>Acertô mizeraviii</div>}
      </Container>
      <GitHubCorner projectUrl="https://github.com/mrbrunelli" />
    </QuizBackground>
  );
}
