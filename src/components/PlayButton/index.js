import styled from 'styled-components';

const QuizButton = styled.button`
  display: block;
  transition: 300ms;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  filter: grayscale(${(props) => (props.disabled ? '100%' : '0%')});
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  border-radius: 5px;
  border: none;
  p {
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }
`;

export default function PlayButton({ children, type, disabled }) {
  return (
    <QuizButton
      type={type}
      disabled={disabled}
    >
      <p>
        {children}
      </p>
    </QuizButton>
  );
}
