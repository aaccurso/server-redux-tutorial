import {setEntries, next, vote} from './vote';

export const actions = {
  SET_ENTRIES: 'SET_ENTRIES',
  NEXT: 'NEXT',
  VOTE: 'VOTE'
}

export function reducer(state, action) {
  switch (action.type) {
  case actions.SET_ENTRIES:
    return setEntries(state, action.entries);
  case actions.NEXT:
    return next(state);
  case actions.VOTE:
    return vote(state, action.entry)
  }
  return state;
}
