import * as React from 'react';
import { Page } from '../components/layout';
import Register from '../components/form/Register';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Page>
      <Register />
    </Page>
  );
};
export default Home;
