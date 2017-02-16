import React, { PropTypes } from 'react';

const Filter = ({ projectId, range, projects, ranges, onChangeProjectId, onChangeRange }) => {

  return (
    <form>
      <select value={projectId} onChange={onChangeProjectId}>
        { projects.map(project => (
          <option key={project.id} value={project.id}>{ project.title }</option>
        )) }
      </select>
      <select value={range} onChange={onChangeRange}>
        { ranges.map(range => (
          <option key={range} value={range}>{ range }</option>
        )) }
      </select>
    </form>
  );
};

Filter.propTypes = {
  projectId: PropTypes.string,
  range: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
  ranges: PropTypes.array.isRequired,
  onChangeProjectId: PropTypes.func.isRequired,
  onChangeRange: PropTypes.func.isRequired,
};

export default Filter;
