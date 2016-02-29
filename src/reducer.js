import {setEntries, next, vote, INITIAL_STATE} from './vote';
import actionTypes from './actionTypes';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actionTypes.SET_ENTRIES:
    return setEntries(state, action.entries);
  case actionTypes.NEXT:
    return next(state);
  case actionTypes.VOTE:
    return state.update('vote', voteState => vote(voteState, action.entry));
  }
  return state;
}
