import delay from 'delay';
import * as ActionTypes from '../utils/ActionTypes';
import apiFetch from '../utils/apiFetch';

export function changeFilterProjectId(projectId) {
  return {
    type: ActionTypes.FILTER_PROJECT_CHANGED,
    projectId: projectId,
  };
}

export function changeFilterRange(range) {
  return {
    type: ActionTypes.FILTER_RANGE_CHANGED,
    range: range,
  };
}

export function loadData({ range, projectId }) {
  return async dispatch => {
    dispatch({
      type: ActionTypes.DATA_LOADING,
    });
    const res = await fetch(`//localhost:3001/data/${range}-${projectId}.json`);
    const json = await res.json();
    dispatch({
      type: ActionTypes.DATA_LOADED,
      data: json,
    });
  };
}
