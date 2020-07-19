import styled from 'styled-components';

export const HangmanStyles = styled.svg`
  width: 200;
  height: 250;

  fill: transparent;
  stroke: ${(props) => props.theme.colors.text};
  stroke-width: 4px;
  stroke-linecap: round;
  transition: ${(props) => props.theme.transition.secondaryTransition};
  .figure-part {
    transition: ${(props) => props.theme.transition.secondaryTransition};
  }
`;
