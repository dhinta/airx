import api from '../helpers/api';

export const getAirportsData = () => {
  return api.get('/airports.json');
};
