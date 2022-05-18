import React from 'react'
import style from './index.module.css';

const Button = (props) => {
  const {children, onClick = () => {}} = props

  return (
    <div className={style['button']} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button