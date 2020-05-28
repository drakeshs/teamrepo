// import majorStoriesNextSprintCall from '../apis/majorStoriesNextSprintCall';

export const fetchUpComingEvents = () => async (dispatch) => {
  // const response = await majorStoriesNextSprintCall.get('/users');
  dispatch({
    type: 'UPCOMING_EVENTS',
    // data: response,
    data: [
      {
        id: '1',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', // eslint-disable-line
        date: 'January 1, 2016',
      },
      {
        id: '2',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', // eslint-disable-line
        date: 'January 1, 2017',
      },
      {
        id: '3',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', // eslint-disable-line
        date: 'January 1, 2017',
      },
      {
        id: '4',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', // eslint-disable-line
        date: 'January 1, 2018',
      },
    ],
  });
};

export default fetchUpComingEvents;
