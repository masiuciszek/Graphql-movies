import * as React from 'react';
import { WrongWordContainer } from './Words.styles';

interface Props {}

const WrongWords: React.FC<Props> = () => {
  return (
    <WrongWordContainer>
      {' '}
      <h1>Wrong-words </h1>{' '}
    </WrongWordContainer>
  );
};
export default WrongWords;
