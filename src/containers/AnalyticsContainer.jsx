import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import Filter from '../components/Filter';
import LineChart from '../components/d3/LineChart';
import Line from '../components/d3/Line';
import Area from '../components/d3/Area';

class AnalyticsContainer extends Component {

  componentDidMount() {
    this.onUpdate();
  }

  componentDidUpdate(prevProps) {
    if (this.props.analytics.projectId !== prevProps.analytics.projectId || this.props.analytics.range !== prevProps.analytics.range) {
      this.onUpdate();
    }
  }

  onUpdate() {
    const { analytics, actions } = this.props;
    actions.loadData({ range: analytics.range, projectId: analytics.projectId });
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
        { analytics.isLoading ? (
          <p>loading...</p>
        ) : (
          <LineChart
            data={analytics.data}
            width={500}
            height={400}
          >
            <Line
              data={analytics.data}
            />
            <Area
              data={analytics.data}
            />
          </LineChart>
        ) }
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

<LineChart
  data={analytics.data}
  width={500}
  height={400}
>
  <Line />
  <Area />
  {/* Add another component */}
</LineChart>
