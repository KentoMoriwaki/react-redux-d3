import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AnalyticsContainer from './AnalyticsContainer';

const RootContainer = ({ store }) => (
  <Provider store={store}>
    <AnalyticsContainer />
  </Provider>
);

export default RootContainer;
