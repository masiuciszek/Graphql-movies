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

const Game: React.FC<Props> = () => {
  const { gameWord, wrongLetters, correctLetters } = useWordState();

  const dispatch = useWordDispatch();

  let uniqueList = correctLetters.filter(
    (item, index) => correctLetters.indexOf(item) === index,
  );

  const checkWinner = React.useCallback(() => {
    if (uniqueList.length > 0 && uniqueList.join('') === gameWord) {
      dispatch({ type: 'SET_WINNER' });
      console.log('apapap');
    }
  }, [uniqueList, gameWord, dispatch]);

  const keyBoardListener = React.useCallback(() => {
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
    checkWinner();
  }, [checkWinner, correctLetters, dispatch, gameWord]);

  const startGame = (): void => {
    let wordForTheGame = randomValue(wordsXs);
    dispatch({ type: 'SET_GAME_WORD', payload: wordForTheGame });
  };

  React.useEffect(() => {
    keyBoardListener();
  }, [checkWinner, correctLetters, keyBoardListener, wrongLetters]);

  console.log(gameWord);

  return (
    <GameStyles>
      <HangMan />
      <UsedLetters />
      <WrongWords />
      <Word gameWord={gameWord} correctLetters={correctLetters} />
      <Button onClick={startGame}>Start Game</Button>
      <Modal />
    </GameStyles>
  );
};
export default Game;
