import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import Filter from '../components/Filter';

class AnalyticsContainer extends Component {

  componentDidMount() {
    const { actions } = this.props;
    // actions.loadCount();
  }

  onChangeProjectId = (e) => {
    this.props.actions.changeFilterProjectId(e.target.value);
  }

  onChangeRange = (e) => {
    this.props.actions.changeFilterRange(e.target.value);
  }

  render() {
    const { analytics, actions } = this.props;
    return (
      <div>
        <Filter
          projectId={analytics.projectId}
          range={analytics.range}
          projects={analytics.projects}
          ranges={analytics.ranges}
          onChangeProjectId={this.onChangeProjectId}
          onChangeRange={this.onChangeRange}
        />
      </div>
    )
  }
}

const mapState = (state, ownProps) => ({
  analytics: state.analytics,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapState, mapDispatch)(AnalyticsContainer);
