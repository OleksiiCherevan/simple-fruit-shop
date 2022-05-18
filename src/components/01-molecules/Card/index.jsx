import style from './index.module.css';

import React, { useState } from 'react'
import TextCardDescription from 'components/00-atoms/TextCardDescription';
import TextCardPrice from 'components/00-atoms/TextCardPrice';
import TextCardName from 'components/00-atoms/TextCardName';
import ButtonSmall from 'components/00-atoms/ButtonSmall';

const Card = (props) => {
  const { children, description, name, price, link } = props;

  const [isHover, setIsHover] = useState(false);

  return (
    <div className={style['card']} onMouseEnter = {e => setIsHover(true)} onMouseLeave = {e => setIsHover(false)}>

      <div className={style['info']}>
        <TextCardDescription>{description}</TextCardDescription>
        <TextCardName>{name}</TextCardName>
      </div>

      <div className={style['sell']}>
        <TextCardPrice>{price}</TextCardPrice>
        <ButtonSmall isActive={isHover}>Buy</ButtonSmall>
      </div>
    </div>
  )
}

export default Card