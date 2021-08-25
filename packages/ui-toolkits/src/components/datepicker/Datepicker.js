import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const Datepicker = ({ label, isDateRange, value, onChange }) => {
  const width = isDateRange ? '45%' : '100%';
  let dates = value;

  if (isDateRange) {
    if (!value) {
      dates = [];
    } else if (value instanceof Array) {
      dates = [...value];
    } else if (!(value instanceof Array)) {
      dates = [value];
    }
  }

  return (
    <>
      <TextField
        id="date"
        label={isDateRange ? label[0] : label}
        type="date"
        defaultValue={isDateRange ? dates[0] : dates}
        style={{ width, paddingRight: '5%' }}
        onChange={(e) => {
          if (isDateRange) {
            dates[0] = e.target.value;
          } else {
            dates = e.target.value;
          }
          onChange(dates, e);
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      {!isDateRange ? null : (
        <TextField
          id="date"
          label={label[1]}
          type="date"
          defaultValue={dates[1]}
          style={{ width }}
          onChange={(e) => {
            dates[1] = e.target.value;
            onChange(dates, e);
          }}
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
