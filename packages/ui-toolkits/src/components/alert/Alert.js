import './alert.css';
import PropTypes from 'prop-types';

const Alert = ({ msg, type = 'success' }) => {
  return <div className={`msg ${type}`}>{msg}</div>;
};

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Alert;
