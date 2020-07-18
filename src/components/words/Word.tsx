import * as React from 'react';
import { useWordState } from '../../context/word.context/Word.provider';
import { WordContainer, WordLetter } from './Words.styles';

interface Props {
  gameWord: string;
  correctLetters: string[];
}

const Word: React.FC<Props> = ({ gameWord, correctLetters }) => {
  return (
    <WordContainer>
      {gameWord
        .split('')
        .map((letter, i) =>
          correctLetters.includes(letter, i) ? (
            <WordLetter key={i}>{letter}</WordLetter>
          ) : (
            <WordLetter key={i}></WordLetter>
          ),
        )}
    </WordContainer>
  );
};
export default Word;
