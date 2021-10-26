import { Text, Alert } from '@airx/ui-toolkits';
import { Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isEmailExistsAction, doSignupAction } from '../../actions';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please provide email')
    .email('Please provide a valid email'),
  name: Yup.string().required('Please provide name'),
  password: Yup.string().required('Password is required'),
  confPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const Signup = ({ checkEmail, doSignup, isEmailExists, alert }) => {
  const onSignup = (values) => {
    const { email, name, password } = values;
    doSignup({ email, name, password });
  };
  const getForm = () => {
    return (
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
          confPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSignup}
      >
        {({ values, errors, setFieldValue, setFieldError }) => {
          return (
            <Form>
              {alert.msg ? (
                <Alert msg={alert.msg} type={alert.type} className="mb-3" />
              ) : null}

              <div className="mb-3">
                <Text
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={(e) => setFieldValue('email', e.target.value)}
                  onBlur={(e) => {
                    if (!errors.email) {
                      checkEmail(e.target.value);
                    }
                  }}
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => <Alert msg={msg} type="error" />}
                />
                {isEmailExists ? (
                  <Alert msg="Email already exists" type="error" />
                ) : null}

                <div id="emailHelp" className="form-text">
                  We will never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <Text
                  label="Name"
                  name="name"
                  value={values.name}
                  onChange={(e) => setFieldValue('name', e.target.value)}
                />
                <ErrorMessage
                  name="name"
                  render={(msg) => <Alert msg={msg} type="error" />}
                />
              </div>
              <div className="mb-3">
                <Text
                  label="Password"
                  name="password"
                  value={values.password}
                  type="password"
                  onChange={(e) => setFieldValue('password', e.target.value)}
                />
                <ErrorMessage
                  name="password"
                  render={(msg) => <Alert msg={msg} type="error" />}
                />
              </div>
              <div className="mb-3">
                <Text
                  label="Confirm Password"
                  name="confPassword"
                  value={values.confPassword}
                  type="password"
                  onChange={(e) =>
                    setFieldValue('confPassword', e.target.value)
                  }
                />
                <ErrorMessage
                  name="confPassword"
                  render={(msg) => <Alert msg={msg} type="error" />}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <div className="form-text">
                Already a member? <Link to="/login">Login</Link> to die
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  };
  return (
    <div className="container-fluid mt-4">
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">{getForm()}</div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth, alert }) => {
  return {
    isEmailExists: auth.isEmailExists,
    alert,
  };
};

export default connect(mapStateToProps, {
  checkEmail: isEmailExistsAction,
  doSignup: doSignupAction,
})(Signup);

Signup.propTypes = {
  checkEmail: PropTypes.func.isRequired,
  doSignup: PropTypes.func.isRequired,
  isEmailExists: PropTypes.bool,
  alert: PropTypes.shape({
    type: PropTypes.string,
    msg: PropTypes.string,
  }),
};
