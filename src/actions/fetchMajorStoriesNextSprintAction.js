import majorStoriesNextSprintCall from '../apis/majorStoriesNextSprintCall';

export const fetchMajorStoriesNextSprint = () => async (dispatch) => {
  try {
    const response = await majorStoriesNextSprintCall.get('/comments');
    dispatch({
      type: 'MAJOR_STORIES',
      status: response.status,
      data: response.data.slice(0, 4),
    });
  } catch (error) {
    // It belongs to some centralized logger like winston
    console.log(error); // eslint-disable-line
    dispatch({
      type: 'CONNECTION_ERROR',
      status: error.response.status,
      data: [],
    });
  }
};

export default fetchMajorStoriesNextSprint;
