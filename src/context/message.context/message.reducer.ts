import { State, Action, initialState } from './message.types';

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_USED_LETTER':
      return {
        ...state,
        haveUsed: !state.haveUsed,
      };
    case 'SET_IS_WINNER':
      return {
        ...state,
        isWinner: !state.isWinner,
      };

    case 'SET_RESENT_TYPED_LETTER':
      return {
        ...state,
        resentTypedKey: action.payload,
      };
    default: {
      throw new Error(`Unable Action Type`);
    }
  }
};
