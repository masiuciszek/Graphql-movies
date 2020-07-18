import * as React from 'react';
import { useWordState } from '../../context/word.context/Word.provider';
import { UsedLettersContainer, WordLetter } from './Words.styles';

interface Props {}

const UsedLetters: React.FC<Props> = () => {
  const { gameWord, correctLetters } = useWordState();

  return (
    <UsedLettersContainer>
      {correctLetters.length > 0 && <h4>Used Letters</h4>}
      {gameWord
        .split('')
        .map(
          (letter, index) =>
            correctLetters.includes(letter) && (
              <WordLetter key={index}>{letter}</WordLetter>
            ),
        )}
    </UsedLettersContainer>
  );
};
export default UsedLetters;
