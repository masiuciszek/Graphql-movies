export type Dispatch = (action: Action) => void;

export type State = {
  gameWord: string;
  correctLetters: string[];
  wrongLetters: string[];
};

export const initialState: State = {
  gameWord: '',
  correctLetters: [],
  wrongLetters: [],
};

// Start the game with setting the first random word to guess
interface SetGameWord {
  type: 'SET_GAME_WORD';
  payload: string;
}

// dispatch to correct words list
interface SetCorrectWord {
  type: 'SET_CORRECT_WORD';
  payload: string;
}

// dispatch to wrong words list
interface SetWrongWord {
  type: 'SET_WRONG_WORD';
  payload: string;
}
interface ClearGameWord {
  type: 'CLEAR_GAME_WORD';
}

export type Action =
  | SetCorrectWord
  | SetWrongWord
  | SetGameWord
  | ClearGameWord;
