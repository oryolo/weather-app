import { createStore } from 'redux';

import currentCityReducer from './reducers';

const globalStore = createStore(currentCityReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default globalStore;
