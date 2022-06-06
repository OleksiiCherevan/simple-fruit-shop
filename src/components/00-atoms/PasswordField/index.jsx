import style from './index.module.css';

import React, { useEffect, useState } from 'react';

import { FIELD_ERROR } from 'assets/svgRaw';

const PasswordField = (props) => {
  const { children, isError = false, placeholder = "", errorMessage, onChange = () => { }, onFocus = () => {}, onBlur = () => {},  } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    onChange(text);
  }, [text]);

  const onTextChange = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const onFocused = () => {
    onFocus();
  };

  const onBlured = () => {
    onBlur();
  };

  return (
    <div className={style['field']} >
      <div className={style['inner-field']}>
        <input className={`${style['text']} ${isError ? style['text-error'] : ""}`} type='password' placeholder={placeholder} value={text} onChange={onTextChange} onFocus={onFocused} onBlur={onBlured}></input>
        {isError ? <div className={style['error-image']}> {FIELD_ERROR} </div> : ''}
      </div>
      {isError ? <div className={style['error-message']} >{errorMessage}</div> : ""}
    </div >
  );
};



export default PasswordField;