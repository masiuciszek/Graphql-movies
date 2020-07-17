import * as React from 'react';
import { WordContainer } from './Words.styles';

interface Props {}

const CorrectWords: React.FC<Props> = () => {
  return (
    <WordContainer>
      {' '}
      <h1> Legia CWSKS </h1>{' '}
    </WordContainer>
  );
};
export default CorrectWords;
