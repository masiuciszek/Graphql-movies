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
  const { gameWord, wrongLetters, correctLetters } = useWordState();
  const dispatch = useWordDispatch();

  const keyBoardListener = React.useCallback(() => {
    console.log('render');
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.keyCode >= 65 && e.keyCode < 90) {
        let letter = e.key;
        if (gameWord.includes(letter)) {
          dispatch({ type: 'SET_CORRECT_WORD', payload: letter });
        }
      }
    });
  }, [dispatch, gameWord]);

  const startGame = (): void => {
    let wordForTheGame = randomValue(wordsXs);
    dispatch({ type: 'SET_GAME_WORD', payload: wordForTheGame });
  };

  React.useEffect(() => {
    keyBoardListener();
  }, [correctLetters, keyBoardListener, wrongLetters]);

  console.log(gameWord);

  return (
    <GameStyles>
      <HangMan />
      <UsedLetters correctLetters={correctLetters} />
      <WrongWords wrongLetters={wrongLetters} />
      <Word gameWord={gameWord} correctLetters={correctLetters} />
      <Button onClick={startGame}>Start Game</Button>
    </GameStyles>
  );
};
export default Game;
