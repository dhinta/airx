import React from 'react';

import Alert from '../components/alert/Alert';

export default {
  title: 'Notification/Alert',
  component: Alert,
  argTypes: {
    msg: { control: 'text' },
    type: { control: 'select', options: ['success', 'error', 'info'] },
  },
};

const Template = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  msg: 'Success Message Alert',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  msg: 'Error Message Alert',
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  msg: 'Show some information',
};
