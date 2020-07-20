import React from 'react';
import { render } from '@testing-library/react';
import { WordProvider } from '../context/word.context/Word.provider';
import { MessageProvider } from '../context/message.context/Message.provider';
import Layout from '../components/layout';
import Word from '../components/words/Word';

test('<Word/>', () => {
  const word = render(
    <Layout>
      <WordProvider>
        <MessageProvider>
          <Word />
        </MessageProvider>
      </WordProvider>
    </Layout>,
  );
  expect(word.container).toBeDefined();
});
