import style from './index.module.css';

import React from 'react';

const Preloader = (props) => {
    const { children } = props;
    
  return (
    <div className={style["lds-ring"]}><div></div><div></div><div></div><div></div></div>
  );
};

export default Preloader;