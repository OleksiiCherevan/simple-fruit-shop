import style from './index.module.css';

import React, { useState } from 'react'
import TextCardCategory from 'components/00-atoms/TextCardCategory';
import TextCardPrice from 'components/00-atoms/TextCardPrice';
import TextCardName from 'components/00-atoms/TextCardName';
import ButtonSmall from 'components/00-atoms/ButtonSmall';
import { useDispatch } from 'react-redux';
import { setSelectedCard } from 'store/cardsSlice';

const Card = (props) => {
  const { children, link, card, onClick = () => { } } = props;
  const {category, name, price} = card;

  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);

  const onBuyClick = e => {
    onClick(e);
    dispatch(setSelectedCard({card}));
  }

  return (
    <div className={style['card']} onMouseEnter={e => setIsHover(true)} onMouseLeave={e => setIsHover(false)}>

      <div className={style['info']}>
        <TextCardCategory>{category}</TextCardCategory>
        <TextCardName>{name}</TextCardName>
      </div>

      <div className={style['sell']}>
        <TextCardPrice>{price}</TextCardPrice>
        <ButtonSmall isActive={isHover} onClick = {onBuyClick}>Buy</ButtonSmall>
      </div>
    </div>
  )
}

export default Card