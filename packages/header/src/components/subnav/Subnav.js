import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { SearchForm, FlightStatusForm } from '@airx/fragments';
import { getAirportsAction, getTripsAction } from '../../actions';

const Subnav = ({ searchFormData, getAirports, getTripTypes }) => {
  return (
    <Switch>
      <Route path="/" exact>
        <SearchForm
          selectedTheme="dark"
          data={searchFormData}
          getAirports={getAirports}
          getTripTypes={getTripTypes}
        />
      </Route>
      <Route path="/flight-status">
        <FlightStatusForm
          selectedTheme="dark"
          data={searchFormData}
          getAirports={getAirports}
        />
      </Route>
    </Switch>
  );
};

Subnav.propTypes = {
  searchFormData: PropTypes.object,
  getAirports: PropTypes.func,
  getTripTypes: PropTypes.func,
};

const mapStateToProps = ({ searchFormData }) => {
  return {
    searchFormData,
  };
};

export default connect(mapStateToProps, {
  getAirports: getAirportsAction,
  getTripTypes: getTripsAction,
})(Subnav);
