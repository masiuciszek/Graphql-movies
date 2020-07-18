/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {
  useWordDispatch,
  useWordState,
} from '../../context/word.context/Word.provider';
import { randomValue, wordsXs } from '../../utils/helpers';
import HangMan from '../hangman';
import Modal from '../modal';
import { Button } from '../styles/Buttons';
import { GameStyles } from '../styles/Wrappers';
import UsedLetters from '../words/UsedLetters';
import Word from '../words/Word';
import WrongWords from '../words/WrongWords';

interface Props {}

const GameTwo: React.FC<Props> = () => {
  const { gameWord, wrongLetters, correctLetters } = useWordState();

  const dispatch = useWordDispatch();

  const keyBoardListener = () => {
    let uniqueList = correctLetters.filter(
      (item, index) => correctLetters.indexOf(item) === index,
    );
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        let letter = e.key;
        if (gameWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            dispatch({ type: 'SET_CORRECT_WORD', payload: letter });
          }
        }
      }
    });
  };

  const startGame = (): void => {
    let wordForTheGame = randomValue(wordsXs);
    dispatch({ type: 'SET_GAME_WORD', payload: wordForTheGame });
  };

  keyBoardListener();

  return (
    <GameStyles>
      <HangMan />
      <UsedLetters />
      <WrongWords />
      <Word />
      <Button onClick={startGame}>Start GameTwo</Button>
      <Modal />
    </GameStyles>
  );
};
export default GameTwo;
