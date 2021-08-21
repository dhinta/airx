import { useEffect } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import MatAutocomplete from '@material-ui/lab/Autocomplete';

const AutoComplete = ({
  label,
  data,
  onChange,
  value,
  limitVisible,
  isMultiple,
}) => {
  let labelId;

  useEffect(() => {
    labelId = label.replace(/ /g, '_');
  }, [label]);

  const single = () => {
    return (
      <MatAutocomplete
        id={labelId}
        options={data}
        value={value}
        getOptionLabel={(option) => option.title}
        onChange={(event, newInputValue) => onChange(event, newInputValue)}
        style={{ width: '100%' }}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
        )}
      />
    );
  };
  const multiple = () => {
    return (
      <MatAutocomplete
        multiple
        id={labelId}
        options={data}
        value={value}
        limitTags={limitVisible}
        getOptionLabel={(option) => option.title}
        onChange={(event, newInputValue) => onChange(event, newInputValue)}
        style={{ width: '100%' }}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
        )}
      />
    );
  };
  return isMultiple ? multiple() : single();
};

AutoComplete.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string })),
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ]),
  limitVisible: PropTypes.number,
  isMultiple: PropTypes.bool,
};

AutoComplete.defaultProps = {
  label: 'Select',
  data: [],
  onChange() {
    console.error('No change handler provided');
  },
  value: null,
  limitVisible: 1,
  isMultiple: false,
};

export default AutoComplete;
