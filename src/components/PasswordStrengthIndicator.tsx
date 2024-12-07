const PasswordStrengthIndicator = ({ password }: { password: string }) => {
  const getStrength = () => {
    // Regular expression for checking password strength
    const hasUpperCase = /[A-Z]/.test(password);  // checks for uppercase letter
    const hasLowerCase = /[a-z]/.test(password);  // checks for lowercase letter
    const hasDigits = /\d/.test(password);        // checks for digit
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password); // checks for special characters
    const isLongEnough = password.length >= 8;    // checks if the length is 8 or more

    // Strength logic based on the password's properties
    if (isLongEnough && hasUpperCase && hasLowerCase && hasDigits && hasSpecialChars) {
      return 'strong';
    } else if (isLongEnough && ((hasUpperCase && hasLowerCase) || (hasDigits && hasSpecialChars))) {
      return 'medium';
    } else if (isLongEnough || (hasUpperCase && hasLowerCase) || hasDigits) {
      return 'weak';
    }
    return 'weak';
  };

  return getStrength();
};

export default PasswordStrengthIndicator;
