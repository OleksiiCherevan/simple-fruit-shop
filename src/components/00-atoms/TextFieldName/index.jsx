import style from './index.module.css';

import React, { useEffect, useState } from 'react'

import { FIELD_ERROR } from 'assets/svgRaw';
import { ERROR_EMPTY, ERROR_LETTERS_ONLY } from 'assets/errors'

const TextFieldName = (props) => {
  const { children, isError = false, placeholder = "Name", pattern = /^[^0-9]*$/i, onChange = () => { } } = props;
  const REGEX = new RegExp(pattern);

  const [isFocused, setIsFocused] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const [errorMessage, setErrorMessage] = useState(ERROR_EMPTY);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("is error", isError);
    console.log(text, isCorrect);
  }, [text])

  const getIsError = (_text = text) => {
    const isEmpty = _text.length === 0;
    const isCorrectPattern = REGEX.test(_text);

    return isEmpty || !isCorrectPattern
  }

  const errorMessageFromCheckingText = (_text = text) => {
    const isEmpty = _text.length === 0;
    const isCorrectPattern = REGEX.test(_text);
   
    if (!isEmpty && !isCorrectPattern) {
      setErrorMessage(ERROR_LETTERS_ONLY)
    }

    if (isEmpty) {
      setErrorMessage(ERROR_EMPTY);
    }
  }

  const onTextChange = (e) => {
    const text = e.target.value;
    
    const isCorrect = !getIsError(text);

    errorMessageFromCheckingText(text);
    setIsCorrect(isCorrect);
    
    onChange(text, isCorrect);

    setText(text);
  }

  const onFocused = () => {
    const isCorrect = !getIsError();
    errorMessageFromCheckingText();
    setIsCorrect(isCorrect);
    setIsFocused(true)
  }

  const onBlured = () => {
    setIsFocused(false)
  }

  return (
    <div className={style['field']} >
      <div className={style['inner-field']}>
        <input className={`${style['text']} ${!isCorrect && !isFocused || isError ? style['text-error'] : ""}`} type='text' placeholder={placeholder} value={text} onChange={onTextChange} onFocus={onFocused} onBlur={onBlured}></input>
        {!isCorrect && !isFocused || isError ? <div className={style['error-image']}> {FIELD_ERROR} </div> : ''}
      </div>
      {!isCorrect && !isFocused || isError ? <div className={style['error-message']} >{errorMessage}</div> : ""}
    </div >
  )
}


export default TextFieldName