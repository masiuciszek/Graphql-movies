import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WordProvider } from '../context/word.context/Word.provider';
import { MessageProvider } from '../context/message.context/Message.provider';
import Layout from '../components/layout';
import Game from '../components/game';

test('<Game/>', () => {
  const game = render(
    <Layout>
      <WordProvider>
        <MessageProvider>
          <Game />
        </MessageProvider>
      </WordProvider>
    </Layout>,
  );
  expect(game.container).toBeDefined();
  expect(game.getByTestId('startgame').textContent).toMatch(/start game/gi);
  expect(game.queryByTestId('newgame')).not.toBeInTheDocument();
  fireEvent.click(game.getByTestId('startgame'));
  expect(game.queryByTestId('newgame')).toBeInTheDocument();
});
