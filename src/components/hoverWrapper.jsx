import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

// Export isHovering props into child component
//
// Usage:
// <HoverWrapper>
//   <Foo bar={baz} />
// </HoverWrapper>
//
// const Foo = ({ bar, isHovering }) =>

const hoverWrapper = (Wrapped) => {
  return class extends Component {

    state = {
      isHovering: false,
    }

    componentDidMount() {
      const node = findDOMNode(this);
      node.addEventListener('mouseenter', this.onMouseEnter);
      node.addEventListener('mouseleave', this.onMouseLeave);
    }

    componentWillUnmount() {
      const node = findDOMNode(this);
      node.removeEventListener('mouseenter', this.onMouseEnter);
      node.removeEventListener('mouseleave', this.onMouseLeave);
    }

    onMouseEnter = () => {
      this.setState({ isHovering: true });
    }

    onMouseLeave = () => {
      this.setState({ isHovering: false });
    }

    render() {
      return <Wrapped isHovering={this.state.isHovering} {...this.props} />;
    }
  }
};

export default hoverWrapper;
