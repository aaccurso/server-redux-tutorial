import makeStore from './src/store';
import startServer from './src/server';
import {actions} from './src/reducer';

export const store = makeStore();
startServer(store);

store.dispatch({
  type: actions.SET_ENTRIES,
  entries: require('./entries.json')
});
store.dispatch({
  type: actions.NEXT
});
