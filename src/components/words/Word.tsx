import * as React from 'react';
import {
  useWordDispatch,
  useWordState,
} from '../../context/word.context/Word.provider';
import { checkString } from '../../utils/helpers';
import { WordContainer, WordLetter, WordsStyles } from './Words.styles';

interface Props {}

const Word: React.FC<Props> = () => {
  const { gameWord, usedLetters } = useWordState();

  const dispatch = useWordDispatch();

  React.useEffect(() => {
    let isAMatch = checkString(gameWord, usedLetters);
    if (isAMatch) {
      dispatch({ type: 'SET_WINNER' });
    }
    // console.log(checkString(gameWord, usedLetters));
  }, [dispatch, gameWord, usedLetters]);

  return (
    <WordContainer>
      <WordsStyles>
        {gameWord.split('').map((letter, i) => (
          <li key={i}>
            <WordLetter>
              {usedLetters.includes(letter) ? letter : ''}
            </WordLetter>
          </li>
        ))}
      </WordsStyles>
    </WordContainer>
  );
};
export default Word;
