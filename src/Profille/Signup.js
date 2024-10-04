import React from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Login from "./Login";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import './SignUp.css'; 

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full Name must be at least 3 characters")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords must match")
    .required("Confirm Password is required"),
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
      <div className="signup-form">
        <h3>Create New Account</h3>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            //==================> Add logics
          }}
        >
          {({ touched, errors }) => (
            <FormikForm>
              <Form.Group controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Field
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className={`form-control ${
                    touched.fullName && errors.fullName ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="fullName"
                  className="invalid-feedback"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`form-control ${
                    touched.email && errors.email ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className={`form-control ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="invalid-feedback"
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className={`form-control ${
                    touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="confirmPassword"
                  className="invalid-feedback"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Sign Up
              </Button>
            </FormikForm>
          )}
        </Formik>
      </div>
    </>
  );
};

function SignUp() {
  return (
    <>
      <Login
        mainComponent={<MainContent />}
        active="active"
        formName="SignUp Form"
      />
    </>
  );
}

export default SignUp;
