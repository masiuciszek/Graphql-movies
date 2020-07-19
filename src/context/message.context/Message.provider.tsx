import * as React from 'react';
import messageReducer from './message.reducer';
import { Dispatch, State, initialState } from './message.types';

interface Props {
  children: React.ReactNode;
}

const MessageStateContext = React.createContext<State | undefined>(undefined);
const MessageDispatchContext = React.createContext<Dispatch | undefined>(
  undefined,
);

const MessageProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(messageReducer, initialState);

  return (
    <MessageStateContext.Provider value={state}>
      <MessageDispatchContext.Provider value={dispatch}>
        {children}
      </MessageDispatchContext.Provider>
    </MessageStateContext.Provider>
  );
};

const useMessageState = () => {
  const context = React.useContext(MessageStateContext);
  if (context === undefined) {
    throw new Error('MessageState need to bee wrapped inside MessageProvider');
  }
  return context;
};
const useMessageDispatch = () => {
  const context = React.useContext(MessageDispatchContext);
  if (context === undefined) {
    throw new Error(
      'MessageDispatch need to bee wrapped inside MessageProvider',
    );
  }
  return context;
};

export { MessageProvider, useMessageState, useMessageDispatch };
