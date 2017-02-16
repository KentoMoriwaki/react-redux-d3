import React, { Component, PropTypes } from 'react';
import * as d3 from 'd3';

const Points = ({ data }, { xScale, yScale }) => {
  return (
    <g>
      { data.map((d, i) => (
        <circle
          key={i}
          r={5}
          cx={xScale(d.date)}
          cy={yScale(d.amount)}
          fill={'#006F8E'}
        />
      )) }
    </g>
  );
};

Points.contextTypes = {
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
};

export default Points;
