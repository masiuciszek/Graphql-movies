import * as React from 'react';
import { useSpring } from 'react-spring';
import {
  useWordDispatch,
  useWordState,
} from '../../../context/word.context/Word.provider';
import { randomValue, wordsXs } from '../../../utils/helpers';

import { StyledNavList, ListBtn, ToggleThemeWrapper, Knob } from './Styles.nav';

interface Props {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavList: React.FC<Props> = ({ isDark, setIsDark }) => {
  const { gameWord } = useWordState();
  const dispatch = useWordDispatch();

  const booleanToString = (b: boolean): string => {
    return String(b);
  };

  const { x, textAlign } = useSpring({
    x: isDark ? 0 : 40,
    textAlign: isDark ? 'left' : 'right',
  });

  return (
    <StyledNavList>
      {gameWord ? (
        <ListBtn
          onClick={() => {
            dispatch({ type: 'CLEAR_GAME_WORD' });
            dispatch({ type: 'CLEAR_USED_WORD_LIST' });
            dispatch({ type: 'CLEAR_WRONG_WORD_LIST' });
          }}>
          New Game
        </ListBtn>
      ) : (
        <ListBtn
          onClick={() => {
            let wordForTheGame = randomValue(wordsXs);
            dispatch({ type: 'SET_GAME_WORD', payload: wordForTheGame });
          }}>
          Start Game
        </ListBtn>
      )}
      <ToggleThemeWrapper
        isDark={isDark}
        onClick={() => {
          setIsDark(!isDark);
          localStorage.setItem('isDark', booleanToString(!isDark));
        }}>
        <div className='slide'>
          <Knob
            style={{
              transform: x.interpolate((x) => `translate3d(${x * 1}px, 0, 0)`),
              textAlign,
            }}>
            {isDark ? ' 🌞' : '🌒'}
          </Knob>
        </div>
      </ToggleThemeWrapper>
    </StyledNavList>
  );
};
export default NavList;
