import React from 'react';
import Layout from './components/layout';
import { WordProvider } from './context/word.context/Word.provider';
import Game from './components/game';
import GameTwo from './components/game/GameTwo';

function App() {
  return (
    <Layout>
      <WordProvider>
        <GameTwo />
      </WordProvider>
    </Layout>
  );
}

export default App;
