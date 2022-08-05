import { useState } from 'react';
import { Box } from 'components/Box';
import { Section } from './Section/Section';
import { FeedbackOptions} from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleFeedback = opt => {
    const feedback = opt.currentTarget.dataset.feedback;
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackPercent = () => {
    const total = totalFeedback();

    return total !== 0 ? Math.round((good * 100) / total) : 0;
  };

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
              options={options}
              onLeaveFeedback={handleFeedback}
            />
        </Section>

        <Section title="Statistics" 
         >
            {totalFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback()}
                positivePercent={positiveFeedbackPercent()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
        </Section>
    </Box>
  ); 
};

