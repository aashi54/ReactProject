import React, { useContext } from 'react';
import { ButtonContext } from './ButtonContext';

const Button = () => {
  const { buttonText, setButtonText } = useContext(ButtonContext);

  const handleClick = () => {
    setButtonText((prevText) => (prevText === 'Sign Up' ? 'Sign In' : 'Sign Up'));
  };

  return <button onClick={handleClick}>{buttonText}</button>;
};

export default Button;
