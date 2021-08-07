import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import MatAutocomplete from '@material-ui/lab/Autocomplete';

const Autocomplete = ({ label, data }) => {
  return (
    <MatAutocomplete
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.title}
      style={{ width: '100%' }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
};

Autocomplete.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

Autocomplete.defaultProps = {
  label: 'Select',
  data: [],
};

export default Autocomplete;
