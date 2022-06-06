import style from "./index.module.css";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import TextCardName from "components/00-atoms/TextCardName";
import TextCardCategory from "components/00-atoms/TextCardCategory";
import TextCardPrice from "components/00-atoms/TextCardPrice";
import ButtonWithArrow from "components/00-atoms/ButtonWithArrow";
import FieldWithErrorRule from "components/00-atoms/FieldWithErrorRule";

import {
    nameValidation,
    numberValidation,
    passwordValidation,
} from "assets/errors";

const ConfirmForm = (props) => {
    const { children } = props;
    const { name, category, price } = useSelector(
        (state) => state.cards.selectedCard
    );

    const [userName, setUserName] = useState("");
    const [userNumber, setUserNumber] = useState("");

    const [isNameCorrect, setIsNameCorrect] = useState(true);
    const [isNumberCorrect, setIsNumberCorrect] = useState(true);

    const [isTimeToCheck, setIsTimeToCheck] = useState(false);

    const onNameChange = (_userName, isCorrect) => {
        setUserName(_userName);
        setIsNameCorrect(isCorrect);
    };

    const onNumberChange = (_userNumber, isCorrect) => {
        setUserNumber(_userNumber);
        setIsNumberCorrect(isCorrect);
    };

    const isAllCorrect = () => isNameCorrect && isNumberCorrect;

    const onSubmitClick = (event) => {
        setIsTimeToCheck(true);
        if (isAllCorrect()) {
            console.log(userName, userNumber);
            alert(`Buyer name: ${userName} Buyer number: ${userNumber}`);

        }
    };

    useEffect(() => {
        setIsTimeToCheck(false);
    }, [userName, userNumber]);
    return (
        <div className={style["form"]}>
            <div className={style["info"]}>
                <TextCardCategory>{category}</TextCardCategory>
                <TextCardName>{name}</TextCardName>
            </div>
            <TextCardPrice>{price}</TextCardPrice>

            <div className={style["fields"]}>
                <FieldWithErrorRule
                    onChange={onNameChange}
                    validation={nameValidation}
                    placeholder={"Name"}
                    isError={!isNameCorrect && isTimeToCheck}
                ></FieldWithErrorRule>
                <FieldWithErrorRule
                    onChange={onNumberChange}
                    validation={numberValidation}
                    placeholder={"Number"}
                    isError={!isNumberCorrect && isTimeToCheck}
                ></FieldWithErrorRule>
            </div>

            <ButtonWithArrow onClick={onSubmitClick}>order</ButtonWithArrow>
        </div>
    );
};

export default ConfirmForm;
