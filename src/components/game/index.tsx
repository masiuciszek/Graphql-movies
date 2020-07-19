/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {
  useWordDispatch,
  useWordState,
} from '../../context/word.context/Word.provider';
import useKeyEvent from '../../hooks/useKeyEvent';
import { randomValue, wordsXs } from '../../utils/helpers';
import HangMan from '../hangman';
import Modal from '../modal';
import { Button } from '../styles/Buttons';
import { GameStyles } from '../styles/Wrappers';
import UsedLetters from '../words/UsedLetters';
import Word from '../words/Word';
import WrongWords from '../words/WrongWords';

interface Props {}

const Game: React.FC<Props> = () => {
  const { gameWord, wrongLetters, usedLetters } = useWordState();

  const key = useKeyEvent();

  const dispatch = useWordDispatch();

  const startGame = (): void => {
    let wordForTheGame = randomValue(wordsXs);
    dispatch({ type: 'SET_GAME_WORD', payload: wordForTheGame });
  };

  const newGame = (): void => {
    dispatch({ type: 'CLEAR_GAME_WORD' });
    dispatch({ type: 'CLEAR_USED_WORD_LIST' });
    dispatch({ type: 'CLEAR_WRONG_WORD_LIST' });
  };

  React.useEffect(() => {
    if (gameWord.includes(key) && !usedLetters.includes(key)) {
      dispatch({ type: 'SET_CORRECT_WORD', payload: key });
      console.log('is a match with word ' + gameWord + ' letter ' + key);
    } else if (!gameWord.includes(key) && !wrongLetters.includes(key)) {
      dispatch({ type: 'SET_WRONG_WORD', payload: key });
      console.log('no match');
    }
  }, [key]);

  // TODO: DELETE
  console.log(gameWord);

  return (
    <GameStyles>
      <HangMan />
      <UsedLetters />
      <WrongWords />
      <Word />
      {!gameWord && <Button onClick={startGame}>Start Game</Button>}
      {gameWord && <Button onClick={newGame}>New Game</Button>}

      <Modal />
    </GameStyles>
  );
};
export default Game;
