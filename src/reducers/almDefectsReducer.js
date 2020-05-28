const initialState = [];
const almDefectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALM_DEFECTS':
      return { ...state, data: action.data, status: action.status };
    case 'CONNECTION_ERROR':
      return { ...state, data: action.data, status: action.status };
    default:
      return state;
  }
};

export default almDefectsReducer;
