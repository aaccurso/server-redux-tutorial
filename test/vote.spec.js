import {expect} from 'chai';
import {List, Map} from 'immutable';

import {setEntries} from '../src/vote';

describe('Vote application', () => {
  it('should set entries', () => {
    const state = Map();
    const entries = ['Trainspotting', '28 Days Later'];
    const nextState = setEntries(state, entries);

    expect(nextState).to.equal(Map({
      entries: List.of('Trainspotting', '28 Days Later')
    }));
  });
});
