import ACTION_TYPES from './types';
import { getAirportsData } from '../services/search.service';

export const getAirportsAction = () => async (dispatch, getState) => {
  const { searchFormData } = getState();
  if (searchFormData.airports.length) {
    return;
  }
  const type = ACTION_TYPES.GET_AIRPORTS;
  try {
    const airports = await getAirportsData();
    const data = {
      type,
      payload: airports.data.map(({ airportCode }) => ({
        title: airportCode,
        id: airportCode,
      })),
    };
    dispatch(data);
  } catch (error) {
    const data = {
      type,
      payload: [],
    };
    dispatch(data);
  }
};

export const getTripsAction = () => ({
  type: ACTION_TYPES.GET_TRIP,
  payload: [
    { text: 'One Way', value: 'ONE_WAY' },
    { text: 'Round Trip', value: 'ROUND_TRIP' },
  ],
});
