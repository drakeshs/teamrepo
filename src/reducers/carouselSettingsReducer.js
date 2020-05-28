const initialState = {
  data: {
    UpcomingEvents: {
      startCarousel: true,
      componentName: 'UpcomingEvents',
    },
    MajorStoriesNextSprint: {
      startCarousel: true,
      componentName: 'MajorStoriesNextSprint',
    },
  },
};

const carouselSettingsReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'UPCOMING_EVENTS':
      newState.data.UpcomingEvents.startCarousel = action.data;
      return newState;
    case 'MAJOR_STORIES':
      newState.data.MajorStoriesNextSprint.startCarousel = action.data;
      return newState;
    default:
      return newState;
  }
};

export default carouselSettingsReducer;
