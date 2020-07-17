import styled from 'styled-components';

export const WordContainer = styled.div`
  padding: 2rem 1rem;
  width: 40vw;
  border: 2px solid ${(props) => props.theme.colors.text};
  margin: 4rem auto;
`;

export const WrongWordContainer = styled(WordContainer)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30vmax;
`;
