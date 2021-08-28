/* eslint-disable no-invalid-this */
import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { AutoComplete, Dropdown, Datepicker, Alert } from '@airx/ui-toolkits';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super();
    this.state = {
      isDateRange: false,
      datePickerLabel: 'Depart',
      tripType: props.selectedTripType,
      datePickerValues: props.startDate,
    };
  }

  componentDidMount() {
    this.initForm();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.tripType !== prevState.tripType) {
      this.initForm();
    }
  }

  render() {
    const initialValues = this.getInialvalues();
    const validationSchema = this.getValidationSchema();
    return (
      <Formik
        initialValues={initialValues}
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
                        data={this.props.airports}
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
                        data={this.props.airports}
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
                        data={this.props.tripTypes}
                        onChange={(e) =>
                          this.onTripTypeChange(e, values, setFieldValue)
                        }
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
                        label={this.state.datePickerLabel}
                        isDateRange={this.state.isDateRange}
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
                      <button
                        type="submit"
                        className="btn btn-danger search-btn"
                      >
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
  }

  initForm() {
    if (this.state.tripType === 'ROUND_TRIP') {
      this.setState({
        isDateRange: true,
        datePickerLabel: ['Depart', 'Return'],
        datePickerValues: [this.props.startDate, this.props.endDate],
      });
    } else {
      this.setState({
        isDateRange: false,
        datePickerLabel: 'Depart',
        datePickerValues: this.props.startDate,
      });
    }
  }

  getInialvalues() {
    const { origin, destination } = this.props;
    const { tripType, datePickerValues } = this.state;

    return {
      origin,
      destination,
      tripType,
      datePickerValues,
    };
  }

  getValidationSchema() {
    return yup.object().shape({
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
              (!this.parent.datePickerValues ||
                !this.parent.datePickerValues[0]))
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
  }

  onTripTypeChange(e, values, setFieldValue) {
    this.setState({ tripType: e.target.value });
    setFieldValue('tripType', e.target.value);
    if (
      e.target.value === 'ROUND_TRIP' &&
      !(values.datePickerValues instanceof Array)
    ) {
      setFieldValue('datePickerValues', [values.datePickerValues]);
    }
    if (
      e.target.value === 'ONE_WAY' &&
      values.datePickerValues instanceof Array
    ) {
      setFieldValue('datePickerValues', values.datePickerValues[0]);
    }
  }
}

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

SearchForm.defaultProps = {
  selectedTripType: '',
};

export default SearchForm;
