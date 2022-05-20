import style from './index.module.css';
import Preloader from 'components/00-atoms/Preloader';
import React from 'react';

const PreloaderWindow = (props) => {
    const { children } = props;
    
  return (
    <div className={style['preloader']}>
      <Preloader></Preloader>
    </div>
  );
};

export default PreloaderWindow;