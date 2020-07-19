import React from 'react';
import Layout from './components/layout';
import { WordProvider as GameProvider } from './context/word.context/Word.provider';
import Game from './components/game';

function App() {
  return (
    <Layout>
      <GameProvider>
        <Game />
      </GameProvider>
    </Layout>
  );
}

export default App;
