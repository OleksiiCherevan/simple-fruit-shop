import './App.css';
import Button from 'components/00-atoms/Button';
import Card from 'components/01-molecules/Card';
import PreloaderWindow from 'components/01-molecules/PreloaderWindow';
import ModalConfirm from 'components/02-organisms/ModalConfirm';

import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchCards, setSelectedCard } from 'store/cardsSlice';


const App = () => {
  const dispatch = useDispatch();
  const { cards, status, error } = useSelector(state => state.cards);

  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  const onBuyClick = (e) => {
    setIsShowModal(true);
  };

  const onBuyCheapest = e => {
    const cheapest = [...cards].sort((cardA, cardB) =>  cardA.price - cardB.price).shift();
    onSelectedCard(cheapest);
    onShowModal();
  };

  const onCloseModal = (e) => {
    setIsShowModal(false);
  };
  const onShowModal = (e) => {
    setIsShowModal(true);
  };

  const onSelectedCard = card => {
    dispatch(setSelectedCard({ card }));
  };

  if (error) {
    return <h1>Happened something bad =</h1>;
  }

  if (status === "pending") {
    return <PreloaderWindow></PreloaderWindow>;
  }

  return (
    <div className='app'>
      <div className="content">
        {cards.map(card => 
          <Card key={card.name} card = {card} onClick={onBuyClick}></Card>
        )}
      </div>

      <Button onClick={onBuyCheapest}>Buy cheapest</Button>

      {isShowModal ? <ModalConfirm onCloseModal={onCloseModal}></ModalConfirm> : ""}
    </div>
  );
};

export default App;