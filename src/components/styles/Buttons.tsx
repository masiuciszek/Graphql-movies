import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 1.5rem auto;
  font-size: 1.6rem;
  width: 18rem;
  border: 2px solid ${({ theme: { colors } }) => colors.text};
  background: transparent;
  padding: 0.5rem 0.8rem;
  border-radius: 1rem;
  ${(props) => props.theme.shadow.elevations[2]};
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.text};
  transition: ${(props) => props.theme.transition.mainTransition};
  &:hover {
    background: ${({ theme: { colors } }) => colors.primary};
    ${(props) => props.theme.shadow.elevations[1]};
    text-transform: capitalize;
    width: 17rem;
  }
  &:active {
    position: relative;
    top: 8px;
  }
`;
