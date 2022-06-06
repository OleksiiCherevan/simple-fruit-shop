import React, { useEffect, useState } from 'react';

import PasswordField from '../PasswordField';

const PasswordFieldWithErrorRule = (props) => {
  const { children, isError = false, _errorMessage, placeholder = "Name", onChange = () => { }, validation = () => {} } = props;

  const [isFocused, setIsFocused] = useState(true);
  const [isCorrect, setIsCorrect] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  
  
  const onTextChange = (text) => {
    let isValid = !validation(text, setErrorMessage);
    setIsCorrect(isValid);
    onChange(text, isValid);
  };

  const onFocused = () => {
    setIsFocused(true);
  };

  const onBlured = () => {
    setIsFocused(false);
  };

  return (
    <PasswordField placeholder={placeholder} errorMessage={_errorMessage || errorMessage} isError={!isCorrect && !isFocused || isError} onChange={onTextChange} onFocus={onFocused} onBlur={onBlured}></PasswordField>
  );
};

export default PasswordFieldWithErrorRule;