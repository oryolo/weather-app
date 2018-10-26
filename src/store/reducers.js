import { FETCH_CITY_DATA, CHANGE_SELECTED_DAY, CHANGE_TEMP_SCALE, SHOW_DRAWER } from './actions';
import { Object } from 'core-js';

const initialState = {
  currentCity: {},
  selectedDay: 0,
  tempInCelsius: false,
  showDrawer: false
}

export default function currentCityReducer(state = initialState, action) {

  switch (action.type) {
    case FETCH_CITY_DATA:
      return Object.assign({}, state, { currentCity: action.currentCity });
    case CHANGE_SELECTED_DAY:
      return Object.assign({}, state, {selectedDay: action.selectedDay});
    case CHANGE_TEMP_SCALE:
      return Object.assign({}, state, {tempInCelsius: !state.tempInCelsius});
    case SHOW_DRAWER:
      return Object.assign({}, state, {showDrawer: !state.showDrawer})
    default:
      return state
  }
}