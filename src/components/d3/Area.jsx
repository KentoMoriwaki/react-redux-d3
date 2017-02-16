import React, { PropTypes } from 'react';
import * as d3 from 'd3';
import hoverWrapper from '../hoverWrapper';

const Area = ({ data, isHovering }, { xScale, yScale, height }) => {
  const area = d3.area()
    .x((d) => xScale(d.date))
    .y0(height)
    .y1((d) => yScale(d.amount));

  const style = {
    fill: isHovering ? '#00A4BB' : 'transparent',
    strokeWidth: 0,
  };
  return (
    <g>
      <path
        d={area(data)}
        style={style}
      />
    </g>
  );
};

Area.contextTypes = {
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
};

export default hoverWrapper(Area);
