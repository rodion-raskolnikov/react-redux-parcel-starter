import { load as loadAPI } from '../../api/client';
import { DATA_LOAD_INIT, DATA_LOAD_DONE, DATA_SET } from './action-types';

export const set = (data) => {
  return {
    type: DATA_SET,
    data,
  }
}

export const load = (level) => {
  return (dispatch) => {
    dispatch({
      type: DATA_LOAD_INIT,
      level,
    });

    loadAPI(level).then(data => {
      dispatch(set(data));
    }).finally(() => {
      dispatch({
        type: DATA_LOAD_DONE,
      });
    });
  };
};
