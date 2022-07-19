import PropTypes from 'prop-types';
import { FaRegCommentAlt, FaRegChartBar } from 'react-icons/fa';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      {title && (
        <Title>
          {title}
          {title === 'Please leave feedback' && <FaRegCommentAlt />}
          {title === 'Statistics' && <FaRegChartBar />}
        </Title>
      )}
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

