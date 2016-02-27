import {setEntries, next, vote, INITIAL_STATE} from './vote';

export const actions = {
  SET_ENTRIES: 'SET_ENTRIES',
  NEXT: 'NEXT',
  VOTE: 'VOTE'
}

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actions.SET_ENTRIES:
    return setEntries(state, action.entries);
  case actions.NEXT:
    return next(state);
  case actions.VOTE:
    return state.update('vote', voteState => vote(voteState, action.entry));
  }
  return state;
}
