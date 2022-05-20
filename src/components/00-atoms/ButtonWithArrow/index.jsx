import style from './index.module.css';
import { ARROW_LEFT } from 'assets/svgRaw';

import React from 'react';

const ButtonWithArrow = (props) => {
  const { children, onClick = () => { } } = props;

  return (
    <button className={style['button']} onClick={onClick}>
      {children}
      <div className={style['arrow']} >
        {ARROW_LEFT}
      </div>
    </button>
  );
};

export default ButtonWithArrow;