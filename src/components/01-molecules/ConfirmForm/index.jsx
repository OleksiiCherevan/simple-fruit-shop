import style from './index.module.css';

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';

import TextCardName from 'components/00-atoms/TextCardName';
import TextCardCategory from 'components/00-atoms/TextCardCategory';
import TextCardPrice from 'components/00-atoms/TextCardPrice';
import ButtonWithArrow from 'components/00-atoms/ButtonWithArrow';
import TextField from 'components/00-atoms/TextField';
import TextFieldName from 'components/00-atoms/TextFieldName';
import TextFieldNumber from 'components/00-atoms/TextFieldNumber';

const ConfirmForm = (props) => {
  const { children } = props;
  const { name, category, price } = useSelector(state => state.cards.selectedCard);

  // const [isTimeToCheck, setIsTimeToCheck] = useState(false);

  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");

  const [isNameCorrect, setIsNameCorrect] = useState(true);
  const [isNumberCorrect, setIsNumberCorrect] = useState(true);

  const [isTimeToCheck, setIsTimeToCheck] = useState(false)
  
  const onNameChange = (_userName, isCorrect) => {
    setUserName(_userName);
    setIsNameCorrect(isCorrect);
  }

  const onNumberChange = (_userNumber, isCorrect) => {
    setUserNumber(_userNumber);
    setIsNumberCorrect(isCorrect);
  }

  const isAllCorrect = () => isNameCorrect && isNumberCorrect;

  const onSubmitClick = (event) => {
    setIsTimeToCheck(true)
    if (isAllCorrect()) {
      console.log(userName, userNumber);

      axios.post('http://localhost:8080/cards', {
        name: userName,
        number: userNumber
      },
      {
        'Content-Type': 'text/plain'
    });
    }
  }

  useEffect(() => {
    setIsTimeToCheck(false);
  }, [userName, userNumber])
  return (
    <div className={style['form']}>
      <div className={style['info']}>
        <TextCardCategory>{category}</TextCardCategory>
        <TextCardName>{name}</TextCardName>
      </div>
      <TextCardPrice>{price}</TextCardPrice>

      <div className={style['fields']}>
        <TextFieldName onChange={onNameChange} isError={!isNameCorrect && isTimeToCheck}></TextFieldName>
        <TextFieldNumber onChange={onNumberChange} isError={!isNumberCorrect && isTimeToCheck}></TextFieldNumber>
      </div>

      <ButtonWithArrow onClick={onSubmitClick}>order</ButtonWithArrow>
    </div>
  )
}

export default ConfirmForm