import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { action } from '@storybook/addon-actions';

import SearchForm from '../components/search-form/SearchForm';

const actionsData = {
  onSearch(data) {
    action('onSearch')(data);
  },
};

export default {
  title: 'Forms/SearchForm',
  component: SearchForm,
  argTypes: {
    selectedTripType: {
      control: 'select',
      options: ['ONE_WAY', 'ROUND_TRIP'],
    },
  },
};

const Template = (args) => <SearchForm {...args} />;
const airports = [
  { title: 'Netaji Bose Int Airport', code: 'CCU' },
  { title: 'Atlanta', code: 'ATL' },
  { title: 'Minneapolis', code: 'MSP' },
  { title: 'Los Angeles', code: 'LAX' },
  { title: 'Paris', code: 'CDG' },
];
const tripTypes = [
  { text: 'One Way', value: 'ONE_WAY' },
  { text: 'Round Trip', value: 'ROUND_TRIP' },
];

export const SearchFormWithoutDefaultSelect = Template.bind({});
SearchFormWithoutDefaultSelect.args = {
  airports,
  tripTypes,
  ...actionsData,
};

export const SearchFormWithDefaultSelect = Template.bind({});
SearchFormWithDefaultSelect.args = {
  airports,
  tripTypes,
  origin: { title: 'Atlanta', code: 'ATL' },
  destination: { title: 'Minneapolis', code: 'MSP' },
  selectedTripType: 'ROUND_TRIP',
  startDate: '2021-09-24',
  endDate: '2021-09-29',
  ...actionsData,
};
