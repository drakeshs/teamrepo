import almDefectsCall from '../apis/almDefectsCall';

export const fetchAlmDefects = () => async (dispatch) => {
  try {
    const response = await almDefectsCall.get('/posts');
    dispatch({
      type: 'ALM_DEFECTS',
      status: response.status,
      // data: response.data,
      data: [
        {
          id: '1',
          defect_id: '12345',
          description: 'Defect',
          url: 'https://www.google.com/',
          assigne: 'Name',
          priority: 'High',
        },
        {
          id: '2',
          defect_id: '12346',
          description: 'Defect',
          url: 'https://www.google.com/',
          assigne: 'Name',
          priority: 'High',
        },
        {
          id: '3',
          defect_id: '12347',
          description: 'Defect',
          url: 'https://www.google.com/',
          assigne: 'Name',
          priority: 'High',
        },
        {
          id: '3',
          defect_id: '12348',
          description: 'Defect',
          url: 'https://www.google.com/',
          assigne: 'Name',
          priority: 'Normal',
        },
      ],
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

export default fetchAlmDefects;
