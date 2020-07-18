import * as React from 'react';
import {
  useWordDispatch,
  useWordState,
} from '../../context/word.context/Word.provider';
import { randomValue, wordsXs } from '../../utils/helpers';
import HangMan from '../hangman';
import { Button } from '../styles/Buttons';
import { GameStyles } from '../styles/Wrappers';
import UsedLetters from '../words/UsedLetters';
import Word from '../words/Word';
import WrongWords from '../words/WrongWords';

interface Props {}

const Game: React.FC<Props> = () => {
  const dispatch = useWordDispatch();

  // React.useEffect(() => {
  //   let word = startGame();
  //   dispatch({ type: 'SET_GAME_WORD', payload: word });
  // }, [dispatch]);

  const startGame = (): string => {
    return randomValue(wordsXs);
  };

  return (
    <GameStyles>
      <HangMan />
      <Word />
      <UsedLetters />
      <WrongWords />
      <Button
        onClick={() =>
          dispatch({ type: 'SET_GAME_WORD', payload: startGame() })
        }>
        Start Game
      </Button>
    </GameStyles>
  );
};
export default Game;
