import * as React from 'react';
import { useWordState } from '../../context/word.context/Word.provider';
import { WordContainer, WordLetter } from './Words.styles';

interface Props {}

const Word: React.FC<Props> = () => {
  const { gameWord, usedLetters } = useWordState();

  React.useEffect(() => {
    console.log('usedLetters string ', usedLetters.join(''));
  }, [usedLetters]);

  return (
    <WordContainer>
      {gameWord
        .split('')
        .map((letter, i) =>
          usedLetters.includes(letter, i) ? (
            <WordLetter key={i}>{letter}</WordLetter>
          ) : (
            <WordLetter key={i}></WordLetter>
          ),
        )}
    </WordContainer>
  );
};
export default Word;
