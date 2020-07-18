import * as React from 'react';
import { useWordState } from '../../context/word.context/Word.provider';
import { UsedLettersContainer, WordLetter } from './Words.styles';

interface Props {
  correctLetters: string[];
}

const UsedLetters: React.FC<Props> = ({ correctLetters }) => {
  return (
    <UsedLettersContainer>
      {correctLetters.length > 0 && <h4>Used Letters</h4>}
      {correctLetters.length > 0 &&
        correctLetters.map((letter, i) => (
          <WordLetter key={i}>{letter}</WordLetter>
        ))}
    </UsedLettersContainer>
  );
};
export default UsedLetters;
