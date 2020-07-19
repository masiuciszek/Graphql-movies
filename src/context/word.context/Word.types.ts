export type Dispatch = (action: Action) => void;

export type State = {
  gameWord: string;
  usedLetters: string[];
  wrongLetters: string[];
  isWinner: boolean;
};

export const initialState: State = {
  gameWord: '',
  usedLetters: [],
  wrongLetters: [],
  isWinner: false,
};

// Start the game with setting the first random word to guess
interface SetGameWord {
  type: 'SET_GAME_WORD';
  payload: string;
}

// dispatch to correct words list
interface SetUsedWord {
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
interface ClearUsedWordWrong {
  type: 'CLEAR_USED_WORD_LIST';
}
interface ClearWrongWordList {
  type: 'CLEAR_WRONG_WORD_LIST';
}
interface SetWinner {
  type: 'SET_WINNER';
}

export type Action =
  | SetUsedWord
  | SetWrongWord
  | SetGameWord
  | ClearGameWord
  | SetWinner
  | ClearUsedWordWrong
  | ClearWrongWordList;
