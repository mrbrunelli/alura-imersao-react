import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import PlayButton from '../src/components/PlayButton';
import PlayInput from '../src/components/PlayInput';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.contrastText};
`;

const Subtitle = styled.h2`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.contrastText};
`;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <Title>Mundo do JavaScript</Title>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Wrapper>
                <Subtitle>
                  Teste os seus conhecimentos sobre o universo do JavaScript e
                  divirta-se criando o seu AluraQuiz!
                </Subtitle>
                <PlayInput
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Diz aí seu nome para jogar :)"
                  maxLength={30}
                  type="text"
                />
                <PlayButton type="submit" disabled={name.length === 0}>
                  JOGAR
                </PlayButton>
              </Wrapper>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <Title>World of JavaScript</Title>
          </Widget.Header>
          <Widget.Content>
            <p>JavaScript é um bagulho muito loco de bom.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mrbrunelli" />
    </QuizBackground>
  );
}
