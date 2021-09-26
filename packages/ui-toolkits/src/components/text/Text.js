import TextField from '@material-ui/core/TextField';
import { PropTypes } from 'prop-types';

const Text = ({ label, value, onChange }) => {
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      onChange={onChange}
      value={value}
      className="w-100"
    />
  );
};

Text.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Text.defaulProps = {
  value: '',
  onChange: () => console.error('onChange handler missing!'),
};

export default Text;
