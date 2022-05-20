import style from './index.module.css';

import React, { useState } from 'react';

const ButtonSmall = (props) => {
  const { children, isActive, onClick = () => { } } = props;
  const [isHover, setIsHover] = useState(false);

  return (
    <button className={`${style['button']} ${isActive || isHover ? style['active'] : ""}`}
      onMouseEnter={e => setIsHover(true)}
      onMouseLeave={e => setIsHover(false)}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonSmall;