import { createStore } from 'redux';

import currentCityReducer from './reducers';

const globalStore = createStore(currentCityReducer);

export default globalStore;
