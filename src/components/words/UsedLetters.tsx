import * as React from 'react';
import { useWordState } from '../../context/word.context/Word.provider';
import { UsedLettersContainer, WordLetter } from './Words.styles';

interface Props {}

const UsedLetters: React.FC<Props> = () => {
  const { gameWord, usedLetters } = useWordState();

  return (
    <UsedLettersContainer>
      {usedLetters.length > 0 && <h4>Used Letters</h4>}

      {usedLetters.map((letter, i) =>
        gameWord.split('').includes(letter) && usedLetters.includes(letter) ? (
          <WordLetter key={i}>{letter}</WordLetter>
        ) : null,
      )}
      {/* {usedLetters.map((letter, i) =>
        gameWord.split('').includes(letter) ? (
          <WordLetter key={i}>{letter}</WordLetter>
        ) : null,
      )} */}
    </UsedLettersContainer>
  );
};
export default UsedLetters;
