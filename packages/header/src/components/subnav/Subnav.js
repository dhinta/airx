import { SearchForm } from '@airx/fragments';

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

const Subnav = () => {
  return <SearchForm airports={airports} tripTypes={tripTypes} />;
};

export default Subnav;
