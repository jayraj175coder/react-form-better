# React Authentication Form

This project is a simple React-based authentication form that includes both a signup and login feature. It allows users to sign up with a name, email, and password, and login with an email and password.

## Features

- **Responsive Design**: The form is fully responsive and designed to work on both desktop and mobile devices.
- **Password Strength Indicator**: A password strength indicator provides feedback to the user as they enter their password.
- **Formik and Yup Integration**: The form uses Formik for form handling and Yup for validation.
- **Toast Notifications**: The app uses `react-toastify` to display success and error messages for user interactions.
- **Conditional Rendering**: Based on the state of the form (SignUp or Login), different forms are displayed with validation.

## How to Run the Project

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

 2.Install the dependencies.

  ```bash
  npm install

3.Run the app in development mode.

   ```bash
    npm start

## Design Choices

- UI Components: 
The form uses modern, minimalistic styling with Tailwind CSS. The design aims to be clean and intuitive, with large buttons and clear form field labels.
- Conditional rendering is employed to show either the "Sign Up" or "Login" form based on the state (isLoggingIn or isSignedUp).
The password strength indicator visually communicates the strength of the entered password using colors for better user understanding.
- State Management:
React's useState hook is used to manage form state, including tracking whether the user is signing up or logging in.
Formik is used for managing form state, handling validation, and submitting data.
- Form Validation:
Form validation is handled using Yup, which is integrated with Formik for schema validation.
A custom password strength indicator function is used to display the strength of the password as the user types.
- User Feedback:
React Toastify is used to display success or error notifications when the user submits the form. This provides immediate feedback to the user about their action.
 
 ## Assumptions and Limitations
## Assumptions:
The app assumes that the form data is only temporarily stored on the client side (no backend integration in this version).
The app only includes basic validation (e.g., email format, password strength) and doesn't include advanced features such as email verification or server-side validation.
There is no social media login option (e.g., Google or Facebook login).

## Limitations:
- No Backend: The app does not currently store or authenticate the user credentials in a database. It only simulates a successful form submission using setTimeout.
- Limited Error Handling: Error handling is limited to form validation and basic success messages. Real-world applications should include more robust error handling, including server-side validation and error messages.
 - No Persistent Authentication: There is no mechanism for remembering logged-in users across sessions (e.g., no localStorage, cookies, or authentication tokens are used).

## Technologies Used
React: JavaScript library for building the user interface.
Formik: A library for managing form state and validation.
Yup: Schema validation library used with Formik for handling form validation.
React Toastify: Used for displaying user notifications.
Tailwind CSS: A utility-first CSS framework used for styling the components.
React Router DOM: For navigation within the app.
Future Improvements
Integrate backend authentication (e.g., using Firebase or a custom API).
Implement user session management (e.g., JWT authentication).
Add social media login options (e.g., Google, Facebook).
Improve error handling and validation (e.g., server-side validation).
Implement form field auto-focus and other user experience enhancements.
