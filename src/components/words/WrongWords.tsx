import * as React from 'react';
import {
  useWordDispatch,
  useWordState,
} from '../../context/word.context/Word.provider';
import { WordLetter, WrongWordContainer } from './Words.styles';

interface Props {}

const WrongWords: React.FC<Props> = () => {
  const { wrongLetters } = useWordState();
  const dispatch = useWordDispatch();

  let wrongLetters2 = wrongLetters.filter(
    (item, index) => wrongLetters.indexOf(item) === index,
  );

  React.useEffect(() => {
    if (wrongLetters.length >= 6) {
      dispatch({ type: 'SET_LOOSER' });
    }
  }, [dispatch, wrongLetters]);

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
