import React, { useEffect, useState } from 'react';

import Field from '../Field';

const FieldWithErrorRule = (props) => {
  const { children, isError = false, placeholder = "Name", onChange = () => { }, validation = () => {} } = props;

  const [isFocused, setIsFocused] = useState(true);
  const [isCorrect, setIsCorrect] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  
  
  const onTextChange = (text) => {
    let isValid = !validation(text, setErrorMessage);
    setIsCorrect(isValid);
    onChange(text);
  };

  const onFocused = () => {
    setIsFocused(true);
  };

  const onBlured = () => {
    setIsFocused(false);
  };

  return (
    <Field placeholder={placeholder} errorMessage={errorMessage} isError={!isCorrect && !isFocused || isError} onChange={onTextChange} onFocus={onFocused} onBlur={onBlured}></Field>
  );
};

export default FieldWithErrorRule;