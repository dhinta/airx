import TextField from '@material-ui/core/TextField';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';

const Text = ({ label, value, onChange, type, ...restProps }) => {
  let labelId;

  useEffect(() => {
    labelId = label ? label.replace(/ /g, '_') : '';
  }, [label]);
  return (
    <TextField
      id={labelId}
      label={label}
      variant="standard"
      onChange={onChange}
      value={value}
      className="w-100"
      type={type}
      autoComplete="off"
      {...restProps}
    />
  );
};

Text.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

Text.defaulProps = {
  value: '',
  type: 'text',
  onChange: () => console.error('onChange handler missing!'),
};

export default Text;
