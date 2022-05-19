import style from './index.module.css';

import React from 'react'

const Template = (props) => {
    const { children } = props;
    
  return (
    <div className={style['template']}>template</div>
  )
}

export default Template