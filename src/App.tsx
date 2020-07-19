import React from 'react';
import Layout from './components/layout';
import { WordProvider as GameProvider } from './context/word.context/Word.provider';
import Game from './components/game';
import { MessageProvider } from './context/message.context/Message.provider';

function App() {
  return (
    <Layout>
      <GameProvider>
        <MessageProvider>
          <Game />
        </MessageProvider>
      </GameProvider>
    </Layout>
  );
}

export default App;
