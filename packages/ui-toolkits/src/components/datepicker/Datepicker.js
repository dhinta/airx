import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const Datepicker = ({ label, isDateRange, value, onChange }) => {
  const width = isDateRange ? '45%' : '100%';
  return (
    <>
      <TextField
        id="date"
        label={isDateRange ? label[0] : label}
        type="date"
        defaultValue={isDateRange && value instanceof Array ? value[0] : value}
        style={{ width, paddingRight: '5%' }}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
      />

      {!isDateRange ? null : (
        <TextField
          id="date"
          label={label[1]}
          type="date"
          defaultValue={value && value instanceof Array ? value[1] : value}
          style={{ width }}
          onChange={onChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
    </>
  );
};

Datepicker.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ]),
  isDateRange: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onChange: PropTypes.func.isRequired,
};

Datepicker.defaultProps = {
  label: 'Select Date',
  isDateRange: false,
  value: null,
  onChange() {
    console.error('Change Handler is not provided');
  },
};

export default Datepicker;
