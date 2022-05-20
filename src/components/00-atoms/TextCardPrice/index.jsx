import style from './index.module.css';

import React from 'react';

const TextCardPrice = (props) => {
  const {children, symbol = '$'} = props;
  return (
    <div className={style['text']}>
      <div className={style['symbol']}>{symbol}</div>
      {children}
    </div>
  );
};

export default TextCardPrice;