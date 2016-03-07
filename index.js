import makeStore from './src/store';
import startServer from './src/server';
import actionTypes from './src/actionTypes';

export const store = makeStore();
startServer(store);

store.dispatch({
  type: actionTypes.SET_ENTRIES,
  entries: require('./entries.json')
});
store.dispatch({
  type: actionTypes.NEXT
});
