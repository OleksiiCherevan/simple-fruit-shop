import style from "./index.module.css";

import React, { useEffect, useState } from "react";
import Card from "components/01-molecules/Card";
import PreloaderWindow from "components/01-molecules/PreloaderWindow";
import { useSelector } from "react-redux";

const CardsScreen = (props) => {
    const { children, card, onCardClick } = props;

    const { cards, status, error } = useSelector((state) => state.cards);

    const onBuyClick = (e) => {
        onCardClick(true);
    };

    if (error) {
        return <h1>Happened something bad =</h1>;
    }

    if (status === "pending") {
        return <PreloaderWindow></PreloaderWindow>;
    }
    return (
        <div className={style["content"]}>
            {cards.map((card) => (
                <Card key={card.name} card={card} onClick={onBuyClick}></Card>
            ))}
        </div>
    );
};

export default CardsScreen;
