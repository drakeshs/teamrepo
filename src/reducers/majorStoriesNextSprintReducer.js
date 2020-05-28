const initialState = [];

const majorStoriesNextSprintReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MAJOR_STORIES':
      return { ...state, data: action.data, status: action.status };
    case 'CONNECTION_ERROR':
      return { ...state, data: action.data, status: action.status };
    default:
      return state;
  }
};

export default majorStoriesNextSprintReducer;
