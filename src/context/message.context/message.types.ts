export type State = {
  haveUsed: boolean;
  isWinner: boolean;
};

export type Dispatch = (action: Action) => void;

export const initialState: State = {
  haveUsed: false,
  isWinner: false,
};

interface SetHaveUsedLetterMessage {
  type: 'SET_HAS_USED_LETTER';
}
interface SetIsWinner {
  type: 'SET_IS_WINNER';
}

export type Action = SetHaveUsedLetterMessage | SetIsWinner;
