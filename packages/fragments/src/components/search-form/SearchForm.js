import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';

import { AutoComplete, Dropdown, Datepicker } from '@airx/ui-toolkits';
import './SearchForm.css';

const SearchForm = ({
  airports,
  originDefaultVal,
  destinationDefaultVal,
  tripTypes,
  selectedTripType = '',
  startDate = '',
  endDate = '',
}) => {
  const [isDateRange, setDateRange] = useState(false);
  const [datePickerLabel, setDatePickerLabel] = useState('Depart');
  const [origin, setOrigin] = useState(originDefaultVal);
  const [destination, setDestination] = useState(destinationDefaultVal);
  const [tripType, setTripType] = useState(selectedTripType);
  const [datePickerValues, setDatePickerValues] = useState(startDate);

  useEffect(() => {
    if (tripType === 'ROUND_TRIP') {
      setDateRange(true);
      setDatePickerLabel(['Depart', 'Return']);
      setDatePickerValues([startDate, endDate]);
    } else {
      setDateRange(false);
      setDatePickerLabel('Depart');
      setDatePickerValues(startDate);
    }
  }, [tripType]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <div className="field-container">
            <AutoComplete
              label="Origin"
              data={airports}
              onChange={(e, val) => setOrigin(val)}
              value={origin}
            />
          </div>
        </div>
        <div className="col-2">
          <div className="field-container">
            <AutoComplete
              label="Destination"
              data={airports}
              onChange={(e, val) => setDestination(val)}
              value={destination}
            />
          </div>
        </div>
        <div className="col-2">
          <div className="field-container">
            <Dropdown
              label="Trip Type"
              value={tripType}
              data={tripTypes}
              onChange={(e) => setTripType(e.target.value)}
            />
          </div>
        </div>
        <div className="col-4">
          <div className="field-container">
            <Datepicker
              label={datePickerLabel}
              isDateRange={isDateRange}
              value={datePickerValues}
              onChange={(e) => console.log(e)}
            />
          </div>
        </div>
        <div className="col-2">
          <div className="field-container">
            <button type="button" className="btn btn-danger search-btn">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchForm.propTypes = {
  airports: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string })),
  originDefaultVal: PropTypes.shape({ title: PropTypes.string }),
  destinationDefaultVal: PropTypes.shape({ title: PropTypes.string }),
  tripTypes: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  selectedTripType: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

export default SearchForm;
