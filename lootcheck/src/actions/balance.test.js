import * as types from './types';
import * as actions from './balance';

it('creates an action to set the balance', () => {
  const balance = 0;
  const expectedAction = { type: types.SET_BALANCE, balance };

  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit toward the balance', () => {
  const depositAmnt = 50;
  const expectedAction = { type: types.DEPOSIT, amount: depositAmnt };

  expect(actions.deposit(depositAmnt)).toEqual(expectedAction);
});

it('creates an action to withdrawl against the balance', () => {
  const withdrawlAmnt = 50;
  const expectedAction = { type: types.WITHDRAW, amount: withdrawlAmnt };

  expect(actions.withdraw(withdrawlAmnt)).toEqual(expectedAction);
});
