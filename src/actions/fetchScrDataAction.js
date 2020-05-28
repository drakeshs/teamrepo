// import majorStoriesNextSprintCall from '../apis/majorStoriesNextSprintCall';

export const fetchScrData = () => async (dispatch) => {
  // const response = await majorStoriesNextSprintCall.get('/users');
  dispatch({
    type: 'SRC_DATA',
    // data: response,
    status: 200,
    data: [
      {
        id: '1',
        scr_number: '12345',
        url: 'https://www.google.com/',
        description: 'Defect',
        date: '01-01-2020',
      },
      {
        id: '2',
        scr_number: '12346',
        url: 'https://www.google.com/',
        description: 'Defect',
        date: '01-24-2020',
      },
      {
        id: '3',
        scr_number: '12347',
        url: 'https://www.google.com/',
        description: 'Defect',
        date: '02-09-2020',
      },
      {
        id: '4',
        scr_number: '12348',
        url: 'https://www.google.com/',
        description: 'Defect',
        date: '02-18-2020',
      },
    ],
  });
};

export default fetchScrData;
