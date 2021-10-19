import { Text } from '@airx/ui-toolkits';
import { Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Alert } from '@airx/ui-toolkits';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please provide email')
    .email('Please provide a valid email'),
  password: Yup.string().required('Please provide password'),
});

const Login = () => {
  const getForm = () => {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(e) => console.log(e)}
      >
        {({ values, errors, setFieldValue }) => {
          return (
            <Form>
              <div className="mb-3">
                <Text
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={(e) => setFieldValue('email', e.target.value)}
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => <Alert msg={msg} type="error" />}
                />
                <div id="emailHelp" className="form-text">
                  We will never share your email with anyone else.
                </div>
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
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <div className="form-text">
                Not registered yet? Click <Link to="/signup">here</Link> to die
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

export default Login;
