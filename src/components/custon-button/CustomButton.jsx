import React from 'react';
import './custombutton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...props }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
