import { fetchSnowIncidents } from './fetchSnowIncidentsAction';
import { fetchUpComingEvents } from './fetchUpComingEventsAction';
import { fetchScrData } from './fetchScrDataAction';
import { fetchMajorStoriesNextSprint } from './fetchMajorStoriesNextSprintAction'; // eslint-disable-line

const allActions = {
  fetchSnowIncidents,
  fetchUpComingEvents,
  fetchScrData,
  fetchMajorStoriesNextSprint,
};

export default allActions;
