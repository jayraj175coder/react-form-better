export const checkPasswordStrength = (password: string): string => {
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasMixedCase = /[a-z]/.test(password) && /[A-Z]/.test(password);
  
    if (password.length >= 12 && hasNumbers && hasSpecialChars && hasMixedCase) {
      return 'strong';
    }
    if (password.length >= 8 && (hasNumbers || hasSpecialChars || hasMixedCase)) {
      return 'medium';
    }
    return 'weak';
  };
  
  export const saveToLocalStorage = (key: string, value: string): void => {
    localStorage.setItem(key, value);
  };
  
  export const getFromLocalStorage = (key: string): string | null => {
    return localStorage.getItem(key);
  };
  
  export const removeFromLocalStorage = (key: string): void => {
    localStorage.removeItem(key);
  };
  