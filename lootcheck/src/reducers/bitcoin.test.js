import bitcoinReducer from './bitcoin';
import { FETCH_BITCOIN } from '../actions/types';

describe('bitcoinReducer', () => {
  const bitcoinData = { bpi: 'bitcoin price index' };

  it('fetches and sets the bitcoin data', () => {
    bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData }).toEqual(
      bitcoinData
    );
  });
});
