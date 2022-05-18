import style from './index.module.css';

import React from 'react'

const ButtonWithArrow = (props) => {
  const {children, onClick = () => {}} = props

  return (
    <div className={style['button']}>
      {children}
      
        <svg className={style['arrow']} width="20"  viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.16663 10H15.8333"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 4.16666L15.8333 9.99999L10 15.8333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      
    </div>
  )
}

export default ButtonWithArrow