import * as React from 'react';
import styled from 'styled-components';
import { handleFlex } from '../../styles/utils/helpers';

interface Props {
  className: string;
}

const Nav: React.FC<Props> = ({ className }) => {
  return (
    <nav className={className}>
      {' '}
      <h1> Legia CWSKS </h1>{' '}
    </nav>
  );
};
export default styled(Nav)`
  padding: 2rem 1rem;
  /* background: ${(props) => props.theme.colors.mainBg}; */
  background:transparent;
  height: calc(12rem - 2rem);

  ${handleFlex('row', 'center', 'center')};
`;
