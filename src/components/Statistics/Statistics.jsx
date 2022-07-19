import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import {
    FaRegSmile,
    FaRegMehRollingEyes,
    FaRegFrownOpen,
    FaRegListAlt,
    FaRegSmileBeam,
  } from 'react-icons/fa';
  import { Item, Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercent = 0 
}) => {
  return (
    <Box
    as="ul"
    display="flex"
    justifyContent="center">
   <Item>
        <Text good>
          <FaRegSmile /> Good: {good}
        </Text>
      </Item>
      <Item>
        <Text neutral>
          <FaRegMehRollingEyes /> Neutral: {neutral}
        </Text>
      </Item>
      <Item>
        <Text bad>
          <FaRegFrownOpen /> Bad: {bad}
        </Text>
      </Item>
      <Item>
        <Text total>
          <FaRegListAlt /> Total: {total}
        </Text>
      </Item>
      <Item>
        <Text percentage>
          <FaRegSmileBeam />
          Positive: {positivePercent} %
        </Text>
      </Item>
    </Box>
  );
};
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercent: PropTypes.number.isRequired,
};