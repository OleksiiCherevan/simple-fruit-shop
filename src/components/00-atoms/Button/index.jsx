import React from 'react';
import style from './index.module.css';

const Button = (props) => {
  const { children, onClick = () => { } } = props;

  return (
    <button className={style['button']} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;