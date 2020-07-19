export type State = {
  haveUsed: boolean;
  isWinner: boolean;
  resentTypedKey: string;
};

export type Dispatch = (action: Action) => void;

export const initialState: State = {
  haveUsed: false,
  isWinner: false,
  resentTypedKey: '', // letter for  comparing  in our warning message Message.tsx
};

interface SetHaveUsedLetterMessage {
  type: 'TOGGLE_USED_LETTER';
}
interface SetIsWinner {
  type: 'SET_IS_WINNER';
}
interface SetResentTypedLetter {
  type: 'SET_RESENT_TYPED_LETTER';
  payload: string;
}

export type Action =
  | SetHaveUsedLetterMessage
  | SetIsWinner
  | SetResentTypedLetter;
