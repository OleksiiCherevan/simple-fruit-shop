import style from './index.module.css';

import React from 'react'

const TextCardName = (props) => {
  const {children} = props;
  return (
    <div className={style['text']}>
      {children}
    </div>
  )
}

export default TextCardName