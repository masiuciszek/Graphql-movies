import React from 'react';
import Home from './pages/Home';
import Layout from './components/layout';
import { WordProvider } from './context/word.context/Word.provider';

function App() {
  return (
    <Layout>
      <WordProvider>
        <Home />
      </WordProvider>
    </Layout>
  );
}

export default App;
