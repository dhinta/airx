import { useEffect } from 'react';
import { PropTypes } from 'prop-types';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const Dropdown = ({ label, value, data, onChange }) => {
  let labelId;

  useEffect(() => {
    labelId = label ? label.replace(/ /g, '_') : '';
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
        value={value}
        onChange={onChange}
        style={{ width: '100%' }}
      >
        {list()}
      </Select>
    </>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaulProps = {
  label: 'Select',
  value: '',
  data: [],
  onChange: () => {
    console.log(new Error('Change Handler Missing'));
  },
};

export default Dropdown;
