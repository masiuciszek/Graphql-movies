import * as React from 'react';
import {
  useWordDispatch,
  useWordState,
} from '../../../context/word.context/Word.provider';
import { randomValue, wordsXs } from '../../../utils/helpers';

import { StyledNavList, ListBtn, ToggleThemeWrapper } from './Styles.nav';

interface Props {}

const NavList: React.FC<Props> = () => {
  const { gameWord } = useWordState();
  const dispatch = useWordDispatch();

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
      <ToggleThemeWrapper>
        <div className='slide'>
          <span id='knob'>🌞</span>
        </div>
      </ToggleThemeWrapper>
    </StyledNavList>
  );
};
export default NavList;
