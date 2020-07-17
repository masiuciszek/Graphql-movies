import * as React from 'react';
import wordReducer from './word.reducer';
import { Dispatch, initialState, State } from './Word.types';

interface Props {
  children: React.ReactNode;
}

const WordStateContext = React.createContext<State | undefined>(undefined);
const WordContextDispatch = React.createContext<Dispatch | undefined>(
  undefined,
);

const WordProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(wordReducer, initialState);
  return (
    <WordStateContext.Provider value={state}>
      <WordContextDispatch.Provider value={dispatch}>
        {children}
      </WordContextDispatch.Provider>
    </WordStateContext.Provider>
  );
};

const useWordState = () => {
  const context = React.useContext(WordStateContext);
  if (context === undefined) {
    throw new Error('WordState need to bee wrapped inside WordProvider');
  }
  return context;
};

const useWordDispatch = () => {
  const context = React.useContext(WordContextDispatch);
  if (context === undefined) {
    throw new Error('WordState need to bee wrapped inside WordProvider');
  }
  return context;
};

export { WordProvider, useWordDispatch, useWordState };
