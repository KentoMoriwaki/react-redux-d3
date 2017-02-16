import React, { PropTypes } from 'react';
import * as d3 from 'd3';

const Line = ({ data }, { xScale, yScale }) => {
  const line = d3.line()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.amount));

  return (
    <path
      d={line(data)}
      fill={'white'}
      stroke={'#00A4BB'}
      strokeWidth={3}
    />
  );
};

Line.contextTypes = {
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
};

export default Line;
