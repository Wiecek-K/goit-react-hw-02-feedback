import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        {this.props.options.map((option, index) => (
          <button key={index} onClick={this.props.onLeaveFeedback}>
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        ))}
      </>
    );
  }
}
export default FeedbackOptions;
