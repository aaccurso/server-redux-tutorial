import {List} from 'immutable';

export function setEntries (currentState, entries) {
  return currentState.set('entries', List(entries));
}
