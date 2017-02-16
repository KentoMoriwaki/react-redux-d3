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
