import style from './index.module.css';

import React, { useEffect, useState } from 'react'
import ConfirmForm from 'components/01-molecules/ConfirmForm';

import { CLOSE_CIRCLE } from 'assets/svgRaw';

const ModalConfirm = (props) => {
  const { children, onCloseModal, card } = props;

  const onHandleStopPropagation = e => {
    e.stopPropagation();
  }

  return (
    <div className={style['modal']} onMouseDown={onCloseModal}>
      <div className={style['container']}>
        <div onClick={onHandleStopPropagation} onMouseDown={onHandleStopPropagation}>
          <ConfirmForm></ConfirmForm>
        </div>
        <div className={style['button']} onClick={onCloseModal}>{CLOSE_CIRCLE}</div>
      </div>
    </div>
  )
}

export default ModalConfirm