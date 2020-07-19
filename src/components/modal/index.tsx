import * as React from 'react';
import { useSpring } from 'react-spring';

import {
  useWordDispatch,
  useWordState,
} from '../../context/word.context/Word.provider';
import { Button } from '../styles/Buttons';
import { ModalStyles, ModalBody } from './Modal.styles';

interface Props {}

const Modal: React.FC<Props> = () => {
  const { isWinner, isLoser } = useWordState();
  const dispatch = useWordDispatch();

  const { y, x } = useSpring({
    y: isWinner ? 0 : 100,
    x: isLoser ? 0 : 100,
  });

  return (
    <ModalStyles
      style={{
        transform: isWinner
          ? y.interpolate((y) => `translate3d(0,${y * -1}%,0)`)
          : x.interpolate((x) => `translate3d(0,${x * -1}%,0)`),
      }}>
      <ModalBody>
        {isWinner && (
          <>
            <h1> Winner </h1>
            <h3>You win the game</h3>
          </>
        )}

        {isLoser && (
          <>
            <h1> Looser </h1>
            <h3>You loose the game</h3>
          </>
        )}
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
