import React from 'react';
import Layout from './components/layout';
import { WordProvider } from './context/word.context/Word.provider';
import Game from './components/game';

function App() {
  return (
    <Layout>
      <WordProvider>
        <Game />
      </WordProvider>
    </Layout>
  );
}

export default App;
