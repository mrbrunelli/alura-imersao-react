import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Container from '../src/components/Container';
import Wrapper from '../src/components/Wrapper';
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

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Container>
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
                  name="nomeDoUsuario"
                  autoComplete={false}
                  autoCapitalize={false}
                  autoCorrect={false}
                />
                <PlayButton
                  type="submit"
                  disabled={name.length === 0}
                >
                  {`JOGAR ${name.toUpperCase()}`}
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
      </Container>
      <GitHubCorner projectUrl="https://github.com/mrbrunelli" />
    </QuizBackground>
  );
}
