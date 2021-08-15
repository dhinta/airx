import React from 'react';
import { action } from '@storybook/addon-actions';

import Dropdown from '../components/dropdown/Dropdown';

const actionData = {
  onChange(event) {
    action('onChange')(event);
  },
};

export default {
  title: 'Forms/Advance/Dropdown',
  component: Dropdown,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const DropdownWithNoDefaultValue = Template.bind({});
DropdownWithNoDefaultValue.args = {
  label: 'Movies',
  data: [
    { text: 'Avengers', value: 1 },
    { text: 'A few good men', value: 2 },
    { text: 'Pursuit of happiness', value: 3 },
    { text: 'Pisaach', value: 4 },
    { text: 'Life of pi', value: 5 },
  ],
  ...actionData,
};
export const DropdownWithDefaultValue = Template.bind({});
DropdownWithDefaultValue.args = {
  label: 'Movies',
  data: [
    { text: 'Avengers', value: 1 },
    { text: 'A few good men', value: 2 },
    { text: 'Pursuit of happiness', value: 3 },
    { text: 'Pisaach', value: 4 },
    { text: 'Life of pi', value: 5 },
  ],
  value: '4',
  ...actionData,
};
