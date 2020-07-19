import { animated } from 'react-spring';
import styled from 'styled-components';

export const MessageStyles = styled(animated.section)`
  background: ${({ theme }) => theme.colors.secondaryShadow};
  padding: 2rem;
  position: fixed;
  top: 0;
  /* transform: translate(-50%, -50%); */
  padding: 3rem 5rem;
  margin: 2rem auto;
`;
