import React from 'react';

const SuccessMessage: React.FC<{ message: string }> = ({ message }) => {
  return <div role="alert" className="success-message">{message}</div>;
};

export default SuccessMessage;
