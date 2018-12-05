import React, { Component } from 'react';
import { Formik } from 'formik';

import './SignIn.css';

class SignIn extends Component {
    render() {
        return(
            <div className="sign-in">
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
                        <form onSubmit={handleSubmit} className="sign-in__form">
                            <input type="text"
                                   className={
                                       (errors.email && touched.email && errors.email) ? 'sign-in__form__email sign-in__form--error' : 'sign-in__form__email'
                                   }
                                   placeholder="Email"
                                   onChange={handleChange}
                                   value={values.email}
                                   name="email"/>
                            <input type="password"
                                   className={
                                       (errors.password && touched.password && errors.password) ? 'sign-in__form__password sign-in__form--error' : 'sign-in__form__password'
                                   }
                                   placeholder="Password"
                                   onChange={handleChange}
                                   value={values.password}
                                   name="password"/>
                            <button type="submit" className="sign-in__form__submit">Sign In</button>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default SignIn;