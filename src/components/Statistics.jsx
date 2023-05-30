import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  };

  render() {
    return (
      <>
        <h5>Good: {this.props.good}</h5>
        <h5>Neutral: {this.props.neutral}</h5>
        <h5>Bad: {this.props.bad}</h5>
        <h5>Total: {this.props.total}</h5>
        <h5>Total: {this.props.positivePercentage}</h5>
      </>
    );
  }
}
export default Statistics;
