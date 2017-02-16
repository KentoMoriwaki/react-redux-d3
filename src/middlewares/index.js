import * as ActionTypes from '../utils/ActionTypes';

const analyticsMiddleware = store => next => action => {
  const { type } = action;

  if (type !== ActionTypes.UPDATE_DATA) { return next(action) };
  // Get filter params from store
  const { analytics } = store.getState();
  (async () => {
    store.dispatch({
      type: ActionTypes.DATA_LOADING,
    });
    const res = await fetch(`//localhost:3001/data/${analytics.range}-${analytics.projectId}.json`);
    const json = await res.json();
    const data = json.map(({ date, amount }) => {
      return { date: Date.parse(date), amount }
    });
    store.dispatch({
      type: ActionTypes.DATA_LOADED,
      data,
    });
  })();
  return next(action);
};

export default analyticsMiddleware;
