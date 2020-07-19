import { Action, initialState, State } from './Word.types';

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_GAME_WORD':
      return {
        ...state,
        gameWord: action.payload,
      };

    case 'SET_CORRECT_WORD':
      return {
        ...state,
        usedLetters: [...state.usedLetters, action.payload],
      };

    case 'SET_WRONG_WORD':
      return {
        ...state,
        wrongLetters: [...state.wrongLetters, action.payload],
      };

    case 'CLEAR_GAME_WORD':
      return {
        ...state,
        gameWord: '',
        isWinner: false,
        isLoser: false,
      };

    case 'SET_WINNER':
      return {
        ...state,
        isWinner: !state.isWinner,
      };

    case 'CLEAR_USED_WORD_LIST':
      return {
        ...state,
        usedLetters: [],
        isWinner: false,
        isLoser: false,
      };
    case 'CLEAR_WRONG_WORD_LIST':
      return {
        ...state,
        wrongLetters: [],
        isWinner: false,
        isLoser: false,
      };
    case 'SET_LOOSER':
      return {
        ...state,
        isLoser: !state.isLoser,
      };

    default: {
      throw new Error(`Unable Action Type`);
    }
  }
};
