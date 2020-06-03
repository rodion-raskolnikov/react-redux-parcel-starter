import { DATA_LOAD_INIT, DATA_LOAD_DONE, DATA_SET } from "../actions/action-types";

const initialState = {
  loading: false,
  data: null,
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case DATA_LOAD_INIT:
      return { ...state, ...{ loading: true }};
    case DATA_LOAD_DONE:
      return { ...state, ...{ loading: false }};
    case DATA_SET:
      return { ...state, ...{ data: action.data }};
    default:
      return state;
  }
};
