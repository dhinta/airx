import React from 'react';
import { action } from '@storybook/addon-actions';

import Datepicker from '../components/datepicker/Datepicker';

const actionData = {
  onChange(event) {
    action('onChange')(event.target.value);
  },
};

export default {
  title: 'Forms/Advance/Datepicker',
  component: Datepicker,
  argTypes: {
    label: { control: { disable: true } },
    value: { control: { disable: true } },
    isDateRange: {
      control: { disable: true },
    },
  },
};

const Template = (args) => <Datepicker {...args} />;

export const SingleSelectNoValue = Template.bind({});
SingleSelectNoValue.args = {
  label: 'From Date',
  ...actionData,
};

export const SingleSelectWithValue = Template.bind({});
SingleSelectWithValue.args = {
  label: 'From Date',
  value: '2021-11-24',
  ...actionData,
};

export const MultiSelectWithNoValue = Template.bind({});
MultiSelectWithNoValue.args = {
  label: ['From', 'To'],
  value: null,
  isDateRange: true,
  ...actionData,
};

export const MultiSelectWithValue = Template.bind({});
MultiSelectWithValue.args = {
  label: ['From', 'To'],
  value: ['2021-11-24', '2021-12-30'],
  isDateRange: true,
  ...actionData,
};
