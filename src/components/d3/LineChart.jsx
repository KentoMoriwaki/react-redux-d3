import React, { Component, PropTypes } from 'react';
import * as d3 from 'd3';

export default class LineChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      xScale: null,
      yScale: null,
    };
  }

  getChildContext() {
    const { xScale, yScale } = this.state;
    const { width, height } = this.props;
    return {
      xScale,
      yScale,
      width,
      height,
    };
  }

  componentWillMount() {
    this.onUpdate(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onUpdate(nextProps);
  }

  onUpdate(props) {
    const { data, width, height } = props;
    const dates = data.map(d => d.date);
    const amounts = data.map(d => d.amount);

    const xScale = d3.scaleTime()
      .range([0, width])
      .domain(d3.extent(dates));
    const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain(d3.extent(amounts));

    this.setState({
      xScale,
      yScale,
    });
  }

  render() {
    const {
      children, data, width, height,
    } = this.props;
    const { xScale, yScale } = this.state;

    return (
      <div>
        <svg
          width={width}
          height={height}
          style={{ height }}
        >
          <g>
            { children }
          </g>
        </svg>
      </div>
    );
  }
}

LineChart.propTypes = {
  children: PropTypes.any,
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

LineChart.childContextTypes = {
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
