import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { useWordState } from '../../context/word.context/Word.provider';

interface Props {}

const ModalStyles = styled(animated.section)`
  background: red;
  position: fixed;
  top: 0;
`;
const ModalBody = styled.div``;

const Modal: React.FC<Props> = () => {
  const { isWinner } = useWordState();
  const { x, opacity } = useSpring({
    x: isWinner ? 0 : 100,
    opacity: isWinner ? 1 : 0,
  });

  return (
    <ModalStyles
      style={{
        transform: x.interpolate((x) => `translate3d(0,${x * -1}%,0)`),
        opacity,
      }}>
      {' '}
      <h1> Winner </h1>{' '}
    </ModalStyles>
  );
};
export default Modal;
