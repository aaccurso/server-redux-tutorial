import {List, Map} from 'immutable';

export function setEntries (currentState, entries) {
  return currentState.set('entries', List(entries));
}

export function next(state) {
  const entries = state.get('entries');
  return state.merge({
    vote: Map({
      pair: entries.take(2)
    }),
    entries: entries.skip(2)
  });
}
