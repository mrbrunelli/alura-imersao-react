import styled from 'styled-components';

const PlayInput = styled.input`
  transition: 300ms;
  width: 100%;
  padding: 15px;
  background-color: transparent;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 5px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.contrastText};
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default PlayInput;
