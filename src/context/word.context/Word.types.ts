export type Dispatch = (action: Action) => void;

export type State = {
  gameWord: string;
  correctWords: string[];
  wrongWords: string[];
};

export const initialState: State = {
  gameWord: '',
  correctWords: [],
  wrongWords: [],
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

export type Action = SetCorrectWord | SetWrongWord | SetGameWord;
