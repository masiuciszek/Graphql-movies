import * as React from 'react';
import { useWordState } from '../../context/word.context/Word.provider';
import { WordLetter, WrongWordContainer } from './Words.styles';

interface Props {}

const WrongWords: React.FC<Props> = () => {
  const { wrongLetters } = useWordState();
  return (
    <WrongWordContainer>
      {wrongLetters.length > 0 && <h4>Wrong-words </h4>}
      {wrongLetters.length > 0 &&
        wrongLetters.map((letter, i) => (
          <WordLetter key={i}>{letter}</WordLetter>
        ))}
    </WrongWordContainer>
  );
};
export default WrongWords;
