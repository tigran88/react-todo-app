import React, { Component } from 'react';
import { Formik } from 'formik';

class SignIn extends Component {
    render() {
        return(
            <div>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        let errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }

                        if (!values.password) {
                            errors.password = 'Required';
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        this.props.signIn(values.email, values.password);
                        setSubmitting(false);
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleSubmit
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <input type="text"
                                   placeholder="Email"
                                   onChange={handleChange}
                                   value={values.email}
                                   name="email"/>
                            {errors.email && touched.email && errors.email}
                            <input type="password"
                                   placeholder="Password"
                                   onChange={handleChange}
                                   value={values.password}
                                   name="password"/>
                            {errors.password && touched.password && errors.password}
                            <button type="submit">Sign In</button>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default SignIn;