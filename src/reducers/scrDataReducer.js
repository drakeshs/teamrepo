const initianState = [];

const scrDataReducer = (state = initianState, action) => {
  switch (action.type) {
    case 'SRC_DATA':
      return { ...state, data: action.data, status: action.status };
    default:
      return state;
  }
};

export default scrDataReducer;
