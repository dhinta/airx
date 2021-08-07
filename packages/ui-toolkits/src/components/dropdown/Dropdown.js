import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const Dropdown = ({ label, selection, data, handleChange }) => {
  let labelId;

  useEffect(() => {
    labelId = label.replace(/ /g, '_');
  }, [label]);

  const list = () => {
    return data.map((item, index) => {
      return (
        <MenuItem value={item.value} key={index}>
          {item.text}
        </MenuItem>
      );
    });
  };

  return (
    <>
      <InputLabel id={labelId}>{label}</InputLabel>

      <Select
        labelId={labelId}
        id={`select_${labelId}`}
        value={selection}
        onChange={handleChange}
      >
        {list()}
      </Select>
    </>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

Dropdown.defaulProps = {
  label: 'Select',
  val: '',
  data: [],
  handleChange: () => {
    console.log(new Error('Change Handler Missing'));
  },
};

export default Dropdown;
