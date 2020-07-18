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
        correctLetters: [...state.correctLetters, action.payload],
      };

    case 'SET_WRONG_WORD':
      return {
        ...state,
        wrongLetters: [...state.wrongLetters, action.payload],
      };

    default: {
      throw new Error(`Unable Action Type`);
    }
  }
};
