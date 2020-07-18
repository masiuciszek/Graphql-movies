import * as React from 'react';
import { useWordState } from '../../context/word.context/Word.provider';
import { WordLetter, WrongWordContainer } from './Words.styles';

interface Props {}

const WrongWords: React.FC<Props> = () => {
  const { gameWord, wrongLetters } = useWordState();

  let wrongLetters2 = wrongLetters.filter(
    (item, index) => wrongLetters.indexOf(item) === index,
  );

  return (
    <WrongWordContainer>
      {wrongLetters.length > 0 && <h4>Wrong-words </h4>}

      {wrongLetters2.map((letter, index) => (
        <WordLetter key={letter}>{letter}</WordLetter>
      ))}
    </WrongWordContainer>
  );
};
export default WrongWords;
