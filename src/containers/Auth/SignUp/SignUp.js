import React, {Component} from 'react';
import { Formik } from 'formik';

import './SignUp.css';

class SignUp extends Component {
    render() {
        return (
            <div className="sign-up">
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
                        this.props.signUp(values.email, values.password);
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
                        <form onSubmit={handleSubmit} className="sign-up__form">
                            {this.props.props ? <div>error</div> : null}
                            <input type="text"
                                   className={
                                       (errors.email && touched.email && errors.email) ? 'sign-up__form__email sign-up__form--error' : 'sign-up__form__email'
                                   }
                                   value={values.email}
                                   name="email"
                                   onChange={handleChange}
                                   placeholder="Email"/>
                            <input type="password"
                                   className={
                                       (errors.password && touched.password && errors.password) ? 'sign-up__form__password sign-up__form--error' : 'sign-up__form__password'
                                   }
                                   value={values.password}
                                   name="password"
                                   onChange={handleChange}
                                   placeholder="Password"/>
                            <button type="submit" className="sign-up__form__submit">Sign Up</button>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default SignUp;