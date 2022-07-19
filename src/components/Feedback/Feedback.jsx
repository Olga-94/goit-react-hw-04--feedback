import PropTypes from 'prop-types';
import { Item } from './Feedback.styled';
import { Button } from '../Button/Buttons';
import { Box } from 'components/Box';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // options = Object.keys(options);

  return (
    <Box 
    as="ul"
    display="flex"
    justifyContent="center"
    >
      {options.map(option => (
        <Item key={option}>
          <Button feedback={option} onClick={onLeaveFeedback} />
        </Item>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

