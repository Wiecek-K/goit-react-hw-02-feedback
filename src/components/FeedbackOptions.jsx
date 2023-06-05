import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        {this.props.options.map((option, index) => (
          <button
            className={css.btn}
            key={index}
            onClick={() => {
              this.props.onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        ))}
      </>
    );
  }
}
export default FeedbackOptions;
