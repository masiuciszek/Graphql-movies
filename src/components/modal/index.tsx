import * as React from 'react';
import { useSpring } from 'react-spring';
import styled from 'styled-components';
import {
  useWordDispatch,
  useWordState,
} from '../../context/word.context/Word.provider';
import { Button } from '../styles/Buttons';
import { ModalStyles, ModalBody } from './Modal.styles';

interface Props {}

const Modal: React.FC<Props> = () => {
  const { isWinner } = useWordState();
  const dispatch = useWordDispatch();
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
      <ModalBody>
        <h1> Winner </h1>
        <h3>You win the game</h3>
        <Button
          onClick={() => {
            dispatch({ type: 'CLEAR_GAME_WORD' });
            dispatch({ type: 'CLEAR_USED_WORD_LIST' });
            dispatch({ type: 'CLEAR_WRONG_WORD_LIST' });
          }}>
          New game?
        </Button>
      </ModalBody>
    </ModalStyles>
  );
};
export default Modal;
