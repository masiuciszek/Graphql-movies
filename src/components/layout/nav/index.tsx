import * as React from 'react';
import styled from 'styled-components';
import { handleFlex } from '../../styles/utils/helpers';
import NavList from './Nav.list';

interface Props {
  className: string;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<Props> = ({ className, isDark, setIsDark }) => {
  return (
    <nav className={className}>
      <div className='title'>
        <h3>Hangman Game</h3>
      </div>
      <NavList isDark={isDark} setIsDark={setIsDark} />
    </nav>
  );
};
export default styled(Nav)`
  padding: 2rem 1rem;
  background: ${(props) => props.theme.colors.mainBg};
  height: calc(12rem - 2rem);
  ${handleFlex('row', 'space-evenly', 'center')};
  .title {
    flex: 1;
  }
`;
