import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
// import axios from "axios";

const UserForm = ({ values, errors, touched }) => {
  const [users, setUsers] = useState([]);
  return (
    <div className="user-form">
      <Form>
        <label htmlFor="name">
          Name :
          <Field
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            values={values.name}
          />
          {touched.name && errors.name && (
            <p>{errors.name}</p>
          )}
        </label>
        <label htmlFor='email'>
          Email :
          <Field
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            values={values.email}
          />
        </label>
        <label htmlFor='password'>
          Password :
          <Field
            id="password"
            type="password"
            name="password"
            placeholder="password"
            values={values.password}
          />
        </label>
        <label htmlFor='terms'>
          Terms of Service:
          <Field
            id="terms"
            type="checkbox"
            name="terms"
            checked={values.terms}
          />
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({name, email, password, terms}) {
    return {
      Name: name,
      Email: email,
      Password: password,
      terms: terms || false,
    };
  },
  validationSchema: Yup.object().shape({
    Name: Yup.string().required()
  })
})(UserForm);

export default FormikUserForm;
