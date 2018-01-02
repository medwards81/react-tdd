import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as actions from '../actions/types';

describe('balanceReducer', () => {
  describe('when initializing', () => {
    const balance = 10;

    it('sets a balance', () => {
      const prevState = undefined;
      const actionData = { type: actions.SET_BALANCE, balance };
      expect(balanceReducer(prevState, actionData)).toEqual(balance);
    });

    describe('then re-ititializing', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
  });

  it('deposits into the balance', () => {
    const balance = 10;
    const deposit = 20;

    const prevState = balance;
    const actionData = { type: actions.DEPOSIT, amount: deposit };
    expect(balanceReducer(balance, actionData)).toEqual(balance + deposit);
  });

  it('withdraws from the balance', () => {
    const balance = 10;
    const withdrawl = 5;

    const prevState = balance;
    const actionData = { type: actions.WITHDRAW, amount: withdrawl };
    expect(balanceReducer(balance, actionData)).toEqual(balance - withdrawl);
  });
});
