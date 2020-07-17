import * as React from 'react';
import { HangmanStyles } from './Styles';

interface Props {}

const HangMan: React.FC<Props> = () => {
  return (
    <HangmanStyles width='200' height='250'>
      <line x1='60' y1='20' x2='140' y2='20' />
      <line x1='140' y1='20' x2='140' y2='50' />
      <line x1='60' y1='20' x2='60' y2='240' />
      <line x1='20' y1='240' x2='100' y2='240' />

      {/* head */}
      <circle cx='140' cy='70' r='20' className='figure-part' />
      {/* body */}
      <line x1='140' y1='90' x2='140' y2='150' className='figure-part' />

      {/* arms */}
      <line x1='140' y1='90' x2='90' y2='120' className='figure-part' />
      <line x1='140' y1='90' x2='190' y2='120' className='figure-part' />

      {/* legs */}
      <line x1='140' y1='150' x2='120' y2='180' className='figure-part' />
      <line x1='140' y1='150' x2='160' y2='180' className='figure-part' />
    </HangmanStyles>
  );
};
export default HangMan;
