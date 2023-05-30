import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  constructor(props) {
    super(props);
    this.state = {
      good: this.props.good,
      neutral: this.props.neutral,
      bad: this.props.bad,
    };
  }
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };
  clickHandler = e => {
    this.setState(prevState => ({
      [e.target.textContent]: prevState[e.target.textContent] + 1,
    }));
  };
  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;
  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback()
      ? `${((this.state.good / this.countTotalFeedback()) * 100).toFixed(1)}%`
      : 'There is no feedback';

  render() {
    return (
      <div>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.clickHandler}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
export default Feedback;
