import { ReactPropTypes } from 'react';

const Button = () => {
  return <button>Add</button>;
};

Button.defaultProps = {
  text: 'Add',
};

Button.propTypes = {
  text: ReactPropTypes.string,
};

export default Button;
