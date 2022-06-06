import React from 'react';
import style from './index.module.css';

const Logo = (props) => {
  const { children, onClick = () => { } } = props;

  return (
    <div className={style['logo']}>
      Logo
    </div>
  );
};

export default Logo;