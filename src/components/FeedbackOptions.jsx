import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        {this.props.options.map((option, index) => (
          <button id={index} onClick={this.props.onLeaveFeedback}>
            {option}
          </button>
        ))}
      </div>
    );
  }
}
export default FeedbackOptions;
