import PropTypes from 'prop-types';

const Button = ({ text }) => {
  return <button style={{ backgroundColor: 'lightgreen' }}>{text}</button>;
};

Button.defaultProps = {
  text: 'Add',
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
