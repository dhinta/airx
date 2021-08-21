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

const Template = (args) => <AutoComplete {...args} />;

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  label: 'Movies',
  data: [
    { title: 'Avengers', id: '1' },
    { title: 'A few good men', id: '2' },
    { title: 'Pursuit of happiness', id: '3' },
    { title: 'Pisaach', id: '4' },
    { title: 'Life of pi', id: '5' },
  ],
  value: { title: 'Pursuit of happiness', id: '3' },
  ...actionsData,
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  label: 'Movies',
  data: [
    { title: 'Avengers', id: '1' },
    { title: 'A few good men', id: '2' },
    { title: 'Pursuit of happiness', id: '3' },
    { title: 'Pisaach', id: '4' },
    { title: 'Life of pi', id: '5' },
  ],
  value: [
    { title: 'Pursuit of happiness', id: '3' },
    { title: 'Life of pi', id: '5' },
  ],
  limitSelection: 1,
  isMultiple: true,
  ...actionsData,
};
