import React, { Component } from 'react';
import { SCHEMA } from '../../schemas';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const initialState = {
    firstName:'',
    lastName:'',
    email: '',
    pass: '',
}


function SignUpForm (props) {

    
const handleSubmitToFormik = (values,actions) => {

}

        return (
            <Formik 
            initialValues={initialState}
            onSubmit={handleSubmitToFormik}
            validationSchema={SCHEMA}
            >
                {(formikProps)=>{
                    console.log(formikProps);
                    return (
                        <Form>
                            <Field name="firstName" placeholder="firstName"/>
                            <ErrorMessage name="firstName"/>
                            <Field name="lastName" placeholder="lastName"/>
                            <ErrorMessage name="lastName"/>
                            <Field name="email" placeholder="email"/>
                            <ErrorMessage name="email" component="p"/>
                            <Field name="pass" placeholder="pass"/>
                            <ErrorMessage name="pass" component="p"/>
                            <input type='submit' value='submit'/>
                        </Form>)
                }}
            </Formik>
        );
    }

export default SignUpForm;
