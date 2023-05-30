import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <section>
        <h3>{this.props.title}</h3>
        {this.props.children}
      </section>
    );
  }
}
export default Section;
