import * as actions from '../actions/types';
import { read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balance = (state = 0, action) => {
  let balance;

  switch (action.type) {
    case actions.SET_BALANCE:
      balance = action.balance;
      break;
    //return action.balance;
    case actions.DEPOSIT:
      balance = state + action.amount;
      break;
    //return state + action.amount;
    case actions.WITHDRAW:
      balance = state - action.amount;
      break;
    //return state - action.amount;
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }

  bake_cookie(BALANCE_COOKIE, balance);

  return balance;
};

export default balance;
