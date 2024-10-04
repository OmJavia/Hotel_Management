import React from 'react';
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Login from './Login';
import './Staff.css'

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  staffId: Yup.string()
    .required("Staff ID is required"),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const MainContent = () => {
  return (
    <>
      <div className="container buttons mb-4">
        <Link to="/login">
          <Button variant="outline-primary" className="login-option-button">
            User
          </Button>
        </Link>
        <Link to="/staff">
          <Button variant="outline-primary" className="staff-option-button active">
            Staff
          </Button>
        </Link>
      </div>
      <div className="user-form">
        <Formik
          initialValues={{ email: '', staffId: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Staff Login Form Values:', values);
            // Handle the form submission logic here
          }}
        >
          {({ touched, errors }) => (
            <FormikForm>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className={`form-control ${
                    touched.email && errors.email ? 'is-invalid' : ''
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback"
                />
              </Form.Group>

              <Form.Group controlId="formStaffId">
                <Form.Label>Staff ID</Form.Label>
                <Field
                  name="staffId"
                  type="text"
                  placeholder="Enter staff ID"
                  className={`form-control ${
                    touched.staffId && errors.staffId ? 'is-invalid' : ''
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="staffId"
                  className="invalid-feedback"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  className={`form-control ${
                    touched.password && errors.password ? 'is-invalid' : ''
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="invalid-feedback"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </FormikForm>
          )}
        </Formik>
      </div>
    </>
  );
};

function Staff() {
  return (
    <>
      <Login mainComponent={<MainContent />} active="active" formName="Staff Login" />
    </>
  );
}

export default Staff;
