import style from './index.module.css';
import React, { useEffect, useState } from 'react'

import { FIELD_ERROR } from 'assets/svgRaw';
const TextField = (props) => {
  const { children, isError = false, placeholder = "Text", errorText = "something wrong", onChange = () => { } } = props;

  const [text, setText] = useState("");

  const onTextChange = (e) => {
    const text = e.target.value;
    setText(text);
  }

  useEffect (() => {
    onChange(text);
  }, [text])

  return (
    <div className={style['field']} >
      <div className={style['inner-field']}>
        <input className={`${style['text']} ${isError ? style['text-error'] : ""}`} type='text' placeholder={placeholder} value={text} onChange={onTextChange}></input>
        {isError ? <div className={style['error-image']}> {FIELD_ERROR} </div> : ''}
      </div>
      {isError ? <div className={style['error-message']} >{errorText}</div> : ""}
    </div >
  )
}



export default TextField