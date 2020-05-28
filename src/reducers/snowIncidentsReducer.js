const initialState = [];

const snowIncidentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SNOW_INCIDENTS':
      return { ...state, data: action.data, status: action.status };
    default:
      return state;
  }
};

export default snowIncidentsReducer;
