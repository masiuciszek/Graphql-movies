import * as React from 'react';
import {
  useWordDispatch,
  useWordState,
} from '../../context/word.context/Word.provider';
import { HangmanStyles } from './Styles';

interface Props {}

const HangMan: React.FC<Props> = () => {
  const { wrongLetters } = useWordState();

  const dispatch = useWordDispatch();
  React.useEffect(() => {
    console.log(wrongLetters.length);
    if (wrongLetters.length === 6) {
      dispatch({ type: 'SET_LOOSER' });
    }
  }, [dispatch, wrongLetters]);

  return (
    <HangmanStyles width='200' height='250'>
      <line x1='60' y1='20' x2='140' y2='20' />
      <line x1='140' y1='20' x2='140' y2='50' />
      <line x1='60' y1='20' x2='60' y2='240' />
      <line x1='20' y1='240' x2='100' y2='240' />

      {/* head */}
      {wrongLetters.length >= 1 && (
        <circle cx='140' cy='70' r='20' className='figure-part' />
      )}

      {/* body */}
      {wrongLetters.length >= 2 && (
        <line
          x1='140'
          y1='90'
          x2='140'
          y2='150'
          className='figure-part figure-part-two'
        />
      )}

      {/* arms */}
      {wrongLetters.length >= 3 && (
        <line
          x1='140'
          y1='90'
          x2='90'
          y2='120'
          className='figure-part figure-part-three'
        />
      )}
      {wrongLetters.length >= 4 && (
        <line
          x1='140'
          y1='90'
          x2='190'
          y2='120'
          className='figure-part figure-part-four'
        />
      )}

      {/* legs */}
      {wrongLetters.length >= 5 && (
        <line
          x1='140'
          y1='150'
          x2='120'
          y2='180'
          className='figure-part figure-part-five'
        />
      )}
      {wrongLetters.length >= 6 && (
        <line
          x1='140'
          y1='150'
          x2='160'
          y2='180'
          className='figure-part figure-part-six'
        />
      )}
    </HangmanStyles>
  );
};
export default HangMan;
