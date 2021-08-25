/* eslint-disable no-invalid-this */
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { AutoComplete, Dropdown, Datepicker, Alert } from '@airx/ui-toolkits';
import './SearchForm.css';

const validationSchema = yup.object().shape({
  origin: yup
    .object()
    .shape({ title: yup.string(), code: yup.string() })
    .nullable()
    .default(null)
    .required('Origin required'),
  destination: yup
    .object()
    .shape({ title: yup.string(), code: yup.string() })
    .nullable()
    .default(null)
    .required('Destination required'),
  tripType: yup.string().required('Trip type required'),
  datePickerValues: yup.mixed(),
  startDate: yup
    .string()
    .test('datePickerValues', 'Provide journey date', function () {
      return !(
        (this.parent.tripType !== 'ROUND_TRIP' &&
          !this.parent.datePickerValues) ||
        (this.parent.tripType === 'ROUND_TRIP' &&
          (!this.parent.datePickerValues || !this.parent.datePickerValues[0]))
      );
    }),
  endDate: yup
    .string()
    .test('datePickerValues', 'Provide return date', function () {
      return !(
        (this.parent.tripType === 'ROUND_TRIP' &&
          !(this.parent.datePickerValues instanceof Array)) ||
        (this.parent.tripType === 'ROUND_TRIP' &&
          !this.parent.datePickerValues[1])
      );
    }),
});

const SearchForm = ({
  airports,
  origin,
  destination,
  tripTypes,
  selectedTripType = '',
  startDate = '',
  endDate = '',
}) => {
  const [isDateRange, setDateRange] = useState(false);
  const [datePickerLabel, setDatePickerLabel] = useState('Depart');
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
    <Formik
      initialValues={{
        origin,
        destination,
        tripType,
        datePickerValues,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, errors, setFieldValue }) => {
        return (
          <Form>
            <div className="container">
              <div className="row">
                <div className="col-2">
                  <div className="field-container">
                    <AutoComplete
                      name="origin"
                      label="Origin"
                      data={airports}
                      onChange={(e, val) => setFieldValue('origin', val)}
                      value={values.origin}
                    />
                    <ErrorMessage
                      name="origin"
                      render={(msg) => <Alert msg={msg} type="error" />}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="field-container">
                    <AutoComplete
                      name="destination"
                      label="Destination"
                      data={airports}
                      onChange={(e, val) => setFieldValue('destination', val)}
                      value={values.destination}
                    />
                    <ErrorMessage
                      name="destination"
                      render={(msg) => <Alert msg={msg} type="error" />}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="field-container">
                    <Dropdown
                      name="tripType"
                      label="Trip Type"
                      value={values.tripType}
                      data={tripTypes}
                      onChange={(e) => {
                        setTripType(e.target.value);
                        setFieldValue('tripType', e.target.value);
                        if (
                          e.target.value === 'ROUND_TRIP' &&
                          !(values.datePickerValues instanceof Array)
                        ) {
                          setFieldValue('datePickerValues', [
                            values.datePickerValues,
                          ]);
                        }
                        if (
                          e.target.value === 'ONE_WAY' &&
                          values.datePickerValues instanceof Array
                        ) {
                          setFieldValue(
                            'datePickerValues',
                            values.datePickerValues[0],
                          );
                        }
                      }}
                    />
                    <ErrorMessage
                      name="tripType"
                      render={(msg) => <Alert msg={msg} type="error" />}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="field-container">
                    <Datepicker
                      label={datePickerLabel}
                      isDateRange={isDateRange}
                      value={values.datePickerValues}
                      onChange={(val) => {
                        setFieldValue('datePickerValues', val);
                      }}
                    />
                    {errors.startDate ? (
                      <Alert msg={errors.startDate} type="error" />
                    ) : null}
                    {errors.endDate ? (
                      <Alert msg={errors.endDate} type="error" />
                    ) : null}
                  </div>
                </div>
                <div className="col-2">
                  <div className="field-container">
                    <button type="submit" className="btn btn-danger search-btn">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

SearchForm.propTypes = {
  airports: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string })),
  origin: PropTypes.shape({ title: PropTypes.string }),
  destination: PropTypes.shape({ title: PropTypes.string }),
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
