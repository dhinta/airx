import React from 'react';
import { action } from '@storybook/addon-actions';

import AutoComplete from '../components/autocomplete/AutoComplete';

const actionsData = {
  onChange: (event, newInputValue) => {
    action('onChange')(newInputValue);
  },
};

export default {
  title: 'Forms/Advance/Autocomplete',
  component: AutoComplete,
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

const Template = (args) => {
  console.log(args);
  return <AutoComplete {...args} />;
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  label: 'Movies',
  data: [
    { title: 'Avengers' },
    { title: 'A few good men' },
    { title: 'Pursuit of happiness' },
    { title: 'Pisaach' },
    { title: 'Life of pi' },
  ],
  value: { title: 'Pursuit of happiness' },
  ...actionsData,
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  label: 'Movies',
  data: [
    { title: 'Avengers' },
    { title: 'A few good men' },
    { title: 'Pursuit of happiness' },
    { title: 'Pisaach' },
    { title: 'Life of pi' },
  ],
  value: [{ title: 'Pursuit of happiness' }, { title: 'Life of pi' }],
  limitSelection: 1,
  isMultiple: true,
  ...actionsData,
};
