import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'; // Now works as it's within Router context
import { toast } from 'react-toastify';

const AuthForm: React.FC = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();  // Now works correctly

  // SignUp Form Initial Values and Validation
  const signUpInitialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  };

  const signUpValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  // Login Form Initial Values and Validation
  const loginInitialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const loginValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  // Handle SignUp Form Submit
  const handleSignUpSubmit = (values: typeof signUpInitialValues) => {
    console.log('Sign Up Data:', values);
    setIsSignedUp(true);
    toast.success('Sign Up Successful!');
  };

  // Handle Login Form Submit
  const handleLoginSubmit = (values: typeof loginInitialValues) => {
    console.log('Login Data:', values);
    toast.success('Login Successful!');
    setTimeout(() => {
      navigate('/dashboard');  // Redirects to dashboard after login
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-xl mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">{isLoggingIn ? 'Login' : 'Sign Up'}</h2>

      {!isLoggingIn && !isSignedUp && (
        <Formik
          initialValues={signUpInitialValues}
          validationSchema={signUpValidationSchema}
          onSubmit={handleSignUpSubmit}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs" />
            </div>

            <div className="flex items-center mb-4">
              <Field
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="mr-2 h-4 w-4 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-700">Remember Me</label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md mt-4 hover:bg-blue-700"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      )}

      {isSignedUp && !isLoggingIn && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setIsLoggingIn(true)} 
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
          >
            Go to Login
          </button>
        </div>
      )}

      {isLoggingIn && (
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleLoginSubmit}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
            </div>

            <div className="flex items-center mb-4">
              <Field
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="mr-2 h-4 w-4 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-700">Remember Me</label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md mt-4 hover:bg-blue-700"
            >
              Login
            </button>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default AuthForm;
