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
        correctLetters: [action.payload, ...state.correctLetters],
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
      };

    default: {
      throw new Error(`Unable Action Type`);
    }
  }
};
