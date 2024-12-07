import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signUpSchema, loginSchema } from '../utils/validationSchemas'; // Adjusted path
import PasswordStrengthIndicator from './PasswordStrengthIndicator';

// Reusable Input Field Component
const InputField = ({
  label,
  id,
  name,
  type,
  placeholder,
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder?: string;
}) => (
  <div className="mb-6">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <Field
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
    <ErrorMessage name={name} component="div" className="text-red-500 text-xs mt-1" />
  </div>
);

const AuthForm: React.FC = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Handle SignUp Form Submit
  const handleSignUpSubmit = (values: any) => {
    console.log('Sign Up Data:', values);
    setIsLoading(true);
    setTimeout(() => {
      setIsSignedUp(true);
      setIsLoading(false);
      toast.success('Sign Up Successful!');
    }, 1000);
  };

  // Handle Login Form Submit
  const handleLoginSubmit = (values: any) => {
    console.log('Login Data:', values);
    setIsLoading(true);
    setTimeout(() => {
      toast.success('Login Successful!');
      setIsLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-xl mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        {isLoggingIn ? 'Login' : 'Sign Up'}
      </h2>

      {!isLoggingIn && !isSignedUp && (
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            rememberMe: false,
          }}
          validationSchema={signUpSchema}
          onSubmit={handleSignUpSubmit}
        >
          {({ values, touched, errors }) => (
            <Form>
              <InputField
                label="Name"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
              <InputField
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className={`w-full p-4 border ${
                    touched.password && errors.password
                      ? 'border-red-500'
                      : touched.password && !errors.password
                      ? 'border-green-500'
                      : 'border-gray-300'
                  } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                <div className="mt-2 text-sm">
                  Password Strength:{' '}
                  <span
                    className={`font-semibold ${
                      PasswordStrengthIndicator({ password: values.password }) === 'strong'
                        ? 'text-green-600'
                        : PasswordStrengthIndicator({ password: values.password }) === 'medium'
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    }`}
                  >
                    {PasswordStrengthIndicator({ password: values.password })}
                  </span>
                </div>
              </div>
              <InputField
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
              />
              <button
                type="submit"
                className={`w-full ${isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 rounded-lg mt-4 transition duration-300`}
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Sign Up'}
              </button>
            </Form>
          )}
        </Formik>
      )}

      {isSignedUp && !isLoggingIn && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setIsLoggingIn(true)}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Go to Login
          </button>
        </div>
      )}

      {isLoggingIn && (
        <Formik
          initialValues={{
            email: '',
            password: '',
            rememberMe: false,
          }}
          validationSchema={loginSchema}
          onSubmit={handleLoginSubmit}
        >
          <Form>
            <InputField
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <InputField
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <button
              type="submit"
              className={`w-full ${isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 rounded-lg mt-4 transition duration-300`}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default AuthForm;
