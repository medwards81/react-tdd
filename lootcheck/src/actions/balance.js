import * as types from './types';

export const setBalance = balance => {
  return {
    type: types.SET_BALANCE,
    balance
  };
};

export const deposit = amount => {
  return {
    type: types.DEPOSIT,
    amount
  };
};

export const withdraw = amount => {
  return {
    type: types.WITHDRAW,
    amount
  };
};
