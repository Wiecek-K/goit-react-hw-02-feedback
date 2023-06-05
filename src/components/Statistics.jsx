import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  static defaultProps = {
    contacts: [],
    name: '',
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
        {this.props.total ? (
          <>
            <h5>Good: {this.props.good}</h5>
            <h5>Neutral: {this.props.neutral}</h5>
            <h5>Bad: {this.props.bad}</h5>
            <h5>Total: {this.props.total}</h5>
            <h5>Total: {this.props.positivePercentage}</h5>
          </>
        ) : (
          <h5>There is no feedback</h5>
        )}
      </>
    );
  }
}
export default Statistics;
