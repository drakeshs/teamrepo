import { combineReducers } from 'redux';
import majorStoriesNextSprintReducer from './majorStoriesNextSprintReducer';
import upComingEventsReducer from './upComingEventsReducer';
import almDefectsReducer from './almDefectsReducer';
import scrDataReducer from './scrDataReducer';
import snowIncidentsReducer from './snowIncidentsReducer';
import carouselSettingsReducer from './carouselSettingsReducer';

export default combineReducers({
  almDefects: almDefectsReducer,
  majorStoriesNextSprint: majorStoriesNextSprintReducer,
  upComingEvents: upComingEventsReducer,
  scrData: scrDataReducer,
  snowIncidents: snowIncidentsReducer,
  carouselSettings: carouselSettingsReducer,
});
