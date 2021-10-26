import {
  StyledSuccessAlert,
  StyledErrorAlert,
  StyledInfoAlert,
} from './Alert.styled';
import PropTypes from 'prop-types';

const Alert = ({ msg, type = 'success', ...props }) => {
  type = type.toLowerCase();
  switch (type) {
    case 'success':
      return <StyledSuccessAlert {...props}>{msg}</StyledSuccessAlert>;
    case 'error':
      return <StyledErrorAlert {...props}>{msg}</StyledErrorAlert>;
    case 'info':
      return <StyledInfoAlert {...props}>{msg}</StyledInfoAlert>;
    default:
      return <StyledInfoAlert {...props}>{msg}</StyledInfoAlert>;
  }
};

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Alert;
