import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };
  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;
  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback()
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2)
      : 0;

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button onClick={this.handleGood}>Good</button>
        <button onClick={this.handleNeutral}>Neutral</button>
        <button onClick={this.handleBad}>Bad</button>
        <h3>Statistics</h3>
        <h5>Good: {this.state.good}</h5>
        <h5>Neutral: {this.state.neutral}</h5>
        <h5>Bad: {this.state.bad}</h5>
        <h5>Total: {this.countTotalFeedback()}</h5>
        <h5>Total: {this.countPositiveFeedbackPercentage()}%</h5>
      </div>
    );
  }
}
export default Feedback;
