import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 1.5rem auto;
  font-size: 1.6rem;
  width: 14rem;
  border: 2px solid ${({ theme: { colors } }) => colors.primary};
  background: transparent;
  padding: 0.5rem 0.8rem;
  border-radius: 1rem;
  ${(props) => props.theme.shadow.elevations[2]};
  cursor: pointer;
`;
