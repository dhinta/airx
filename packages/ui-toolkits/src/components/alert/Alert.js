import {
  StyledSuccessAlert,
  StyledErrorAlert,
  StyledInfoAlert,
} from './Alert.styled';
import PropTypes from 'prop-types';

const Alert = ({ msg, type = 'success' }) => {
  switch (type) {
    case 'success':
      return <StyledSuccessAlert>{msg}</StyledSuccessAlert>;
    case 'error':
      return <StyledErrorAlert>{msg}</StyledErrorAlert>;
    case 'info':
      return <StyledInfoAlert>{msg}</StyledInfoAlert>;
    default:
      return <StyledInfoAlert>{msg}</StyledInfoAlert>;
  }
};

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Alert;
