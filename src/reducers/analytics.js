import * as ActionTypes from '../utils/ActionTypes';

const initialState = {
  range: 'week', // week, month
  projectId: '1',
  projects: [
    { id: '1', title: "Project 1", },
    { id: '2', title: "Project 2", },
  ],
  ranges: ['week', 'month'],
  isLoading: true,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FILTER_PROJECT_CHANGED:
      return { ...state, projectId: action.projectId };
    case ActionTypes.FILTER_RANGE_CHANGED:
      return { ...state, range: action.range };
    case ActionTypes.DATA_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.DATA_LOADED:
      return { ...state, isLoading: false, data: action.data };
    default:
      return state;
  }
}

export default reducer;
