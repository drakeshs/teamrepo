// import majorStoriesNextSprintCall from '../apis/majorStoriesNextSprintCall';

export const fetchSnowIncidents = () => async (dispatch) => {
  // const response = await majorStoriesNextSprintCall.get('/users');
  dispatch({
    type: 'SNOW_INCIDENTS',
    // data: response,
    status: 200,
    data: [
      {
        id: '1',
        incident_number: '123456',
        url: 'https://www.google.com/',
        short_description: 'Desc',
        assignment_group: 'Transformers',
      },
      {
        id: '2',
        incident_number: '123457',
        url: 'https://www.google.com/',
        short_description: 'Desc',
        assignment_group: 'Transformers',
      },
      {
        id: '3',
        incident_number: '123458',
        url: 'https://www.google.com/',
        short_description: 'Desc',
        assignment_group: 'Transformers',
      },
      {
        id: '4',
        incident_number: '123458',
        url: 'https://www.google.com/',
        short_description: 'Defect',
        assignment_group: 'Transformers',
      },
    ],
  });
};

export default fetchSnowIncidents;
