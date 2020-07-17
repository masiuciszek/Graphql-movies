import * as React from 'react';
import {
  useWordDispatch,
  useWordState,
} from '../../context/word.context/Word.provider';
import { randomValue, wordsXs } from '../../utils/helpers';
import HangMan from '../hangman';
import { GameStyles } from '../styles/Wrappers';
import CorrectWords from '../words/CorrectWords';
import WrongWords from '../words/WrongWords';

interface Props {}

const Game: React.FC<Props> = () => {
  const dispatch = useWordDispatch();

  React.useEffect(() => {
    let word = randomValue(wordsXs);
    dispatch({ type: 'SET_GAME_WORD', payload: word });
  }, [dispatch]);

  return (
    <GameStyles>
      <HangMan />
      <CorrectWords />
      <WrongWords />
    </GameStyles>
  );
};
export default Game;
