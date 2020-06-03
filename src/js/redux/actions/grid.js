import { GRID_ACTION } from './action-types';

export const gridAction = (cell) => {
  return {
    type: GRID_ACTION,
    cell,
  };
};
