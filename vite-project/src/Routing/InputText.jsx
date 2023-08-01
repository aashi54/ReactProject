import React, { useContext } from 'react';
import { ButtonContext } from './ButtonContext';

const InputText = () => {
  const { buttonText, setButtonText } = useContext(ButtonContext);

  const Update = (e) => {
       setButtonText(e.target.value);
  }

  return <input type="text" value={buttonText} onChange={Update} />;
};

export default InputText;