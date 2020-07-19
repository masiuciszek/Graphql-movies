import * as React from 'react';
import styled from 'styled-components';
import { handleFlex } from '../../styles/utils/helpers';
import NavList from './Nav.list';

interface Props {
  className: string;
}

const Nav: React.FC<Props> = ({ className }) => {
  return (
    <nav className={className}>
      <div className='title'>
        <h3>Hangman Game</h3>
      </div>
      <NavList />
    </nav>
  );
};
export default styled(Nav)`
  padding: 2rem 1rem;
  background: transparent;
  height: calc(12rem - 2rem);
  ${handleFlex('row', 'space-evenly', 'center')};
  .title {
    flex: 1;
  }
`;
