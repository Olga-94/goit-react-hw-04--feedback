import { Component } from 'react';
import { Box } from 'components/Box';
import { Section } from './Section/Section';
import { FeedbackOptions} from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  handleFeedback = opt => {
    const feedback = opt.currentTarget.dataset.feedback;
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedbackPercent = () => {
    const total = this.totalFeedback();
    const { good } = this.state;

    return total !== 0 ? Math.round((good * 100) / total) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
     return (
    <Box 
    bg="backgroundSection"
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    boxShadow="default"
    >
       <Section 
         title="Please leave feedback">
            <FeedbackOptions
              options={this.options}
              onLeaveFeedback={this.handleFeedback}
            />
        </Section>

        <Section title="Statistics" 
         >
            {this.totalFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.totalFeedback()}
                positivePercent={this.positiveFeedbackPercent()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
        </Section>
    </Box>
  ); 
  }

};

