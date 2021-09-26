/* eslint-disable no-invalid-this */
import { ThemeProvider } from 'styled-components';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { StyledFieldContainer, StyledButton } from '../styled/app.styled';
import {
  StyledSeparationText,
  StyledFieldContainerExtended,
} from './flight-status-form.styled';
import { AutoComplete, Text, Alert } from '@airx/ui-toolkits';

import Theme from '../styled/theme';

const FlightStatusForm = ({ selectedTheme, data, getAirports }) => {
  const themeConfiguration = Theme[selectedTheme];
  const initialValues = {
    origin: null,
    destination: null,
    flightNum: '',
  };
  const validationSchema = yup.object().shape({
    origin: yup
      .object()
      .shape({ title: yup.string(), id: yup.string() })
      .nullable()
      .default(null)
      .required('Origin required'),
    destination: yup
      .object()
      .shape({ title: yup.string(), id: yup.string() })
      .nullable()
      .default(null)
      .required('Destination required'),
    flightNum: yup
      .string()
      .test(
        'flightNumValidation',
        'Flight number is required',
        function (value) {
          const { origin, destination } = this.parent;
          if (!origin && !destination) return value != null;
          return true;
        },
      ),
  });
  useEffect(() => {
    getAirports();
  }, [getAirports]);

  return (
    <ThemeProvider theme={themeConfiguration}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => console.log('submitted')}
      >
        {({ values, errors, setFieldValue }) => {
          return (
            <Form>
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <StyledFieldContainer>
                      <AutoComplete
                        name="origin"
                        label="Origin"
                        data={data.airports}
                        onChange={(e, val) => setFieldValue('origin', val)}
                        value={values.origin}
                      />
                      <ErrorMessage
                        name="origin"
                        render={(msg) => <Alert msg={msg} type="error" />}
                      />
                    </StyledFieldContainer>
                  </div>
                  <div className="col-3">
                    <StyledFieldContainer>
                      <AutoComplete
                        name="destination"
                        label="Destination"
                        data={data.airports}
                        onChange={(e, val) => setFieldValue('destination', val)}
                        value={values.destination}
                      />
                      <ErrorMessage
                        name="destination"
                        render={(msg) => <Alert msg={msg} type="error" />}
                      />
                    </StyledFieldContainer>
                  </div>
                  <div className="col-1">
                    <StyledFieldContainerExtended>
                      <StyledSeparationText>Or</StyledSeparationText>
                    </StyledFieldContainerExtended>
                  </div>
                  <div className="col-3">
                    <StyledFieldContainer>
                      <Text label="Flight Number" name="flightNum" />
                      <ErrorMessage
                        name="flightNum"
                        render={(msg) => <Alert msg={msg} type="error" />}
                      />
                    </StyledFieldContainer>
                  </div>
                  <div className="col-2">
                    <StyledButton type="submit" className="btn btn-danger">
                      Submit
                    </StyledButton>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </ThemeProvider>
  );
};

FlightStatusForm.propTypes = {
  selectedTheme: PropTypes.string,
  data: PropTypes.object,
  getAirports: PropTypes.func,
};

FlightStatusForm.defaultProps = {
  selectedTheme: 'default',
};

export default FlightStatusForm;
