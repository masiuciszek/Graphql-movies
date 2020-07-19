import { State, Action, initialState } from './message.types';

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_HAS_USED_LETTER':
      return {
        ...state,
        haveUsed: !state.haveUsed,
      };
    case 'SET_IS_WINNER':
      return {
        ...state,
        isWinner: !state.isWinner,
      };

    default: {
      throw new Error(`Unable Action Type`);
    }
  }
};
