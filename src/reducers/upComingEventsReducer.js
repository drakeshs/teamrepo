const upComingEventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPCOMING_EVENTS':
      return action.data;
    default:
      return state;
  }
};

export default upComingEventsReducer;
