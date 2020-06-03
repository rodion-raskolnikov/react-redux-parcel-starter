import { KEYPAD_ACTION } from "../actions/action-types";

const initialState = {
  counter: 0,
};

export const keypad = (state = initialState, action) => {
  switch (action.type) {
    case KEYPAD_ACTION:
      return { ...state, ...{ counter: state.counter + 1 }};
    default:
      return state;
  }
};
