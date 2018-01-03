import { FETCH_BITCOIN } from '../actions/types';

const bitcoin = (state = {}, acttion) => {
  switch (action.type) {
    case FETCH_BITCOIN:
      return action.bitcoin;
    default:
      return state;
  }
};
