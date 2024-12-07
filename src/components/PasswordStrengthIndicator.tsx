// PasswordStrengthIndicator.tsx
import React from 'react';

const PasswordStrengthIndicator: React.FC<{ password: string }> = ({ password }) => {
  // Password strength logic
  return (
    <div className="mt-1 text-sm text-gray-500">
      {/* Example of password strength feedback */}
      {password.length < 6 ? 'Weak' : password.length < 12 ? 'Medium' : 'Strong'}
    </div>
  );
};

export default PasswordStrengthIndicator;
