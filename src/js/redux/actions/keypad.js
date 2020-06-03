import { KEYPAD_ACTION } from './action-types';

export const keypadAction = (key) => {
  return {
    type: KEYPAD_ACTION,
    key,
  };
};
