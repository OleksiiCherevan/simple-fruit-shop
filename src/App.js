import "./App.css";
import Button from "components/00-atoms/Button";
import Card from "components/01-molecules/Card";
import PreloaderWindow from "components/01-molecules/PreloaderWindow";
import ModalConfirm from "components/02-organisms/ModalConfirm";

import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchCards, setSelectedCard } from "store/cardsSlice";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import CardsScreen from "components/02-organisms/00-screens/CardsScreen";
import AuthBlock from "components/01-molecules/AuthBlock";
import Register from "components/02-organisms/00-screens/Register";
import ButtonWithArrow from "components/00-atoms/ButtonWithArrow";
import Login from "components/02-organisms/00-screens/Login";
import LogOutBlock from "components/01-molecules/LogOutBlock";
import AdminBlock from "components/02-organisms/00-screens/AdminPanel";
import Logo from "components/00-atoms/Logo";

const App = () => {
    const dispatch = useDispatch();

    const { token } = useSelector((state) => state.user);

    const [isShowModal, setIsShowModal] = useState(false);

    useEffect(() => {
        dispatch(fetchCards());
    }, []);

    const onCloseModal = (e) => {
        setIsShowModal(false);
    };

    const onShowModal = (e) => {
        setIsShowModal(true);
    };

    const onSelectedCard = (card) => {
        dispatch(setSelectedCard({ card }));
    };

    return (
        <BrowserRouter>
            <div className="app">
                <header className="header">
                    <Link to="/">
                        <div onClick={() => dispatch(fetchCards())}>
                            <Logo></Logo>
                        </div>
                    </Link>
                    {token ? (
                        <LogOutBlock></LogOutBlock>
                    ) : (
                        <AuthBlock></AuthBlock>
                    )}
                </header>

                <main className="content">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <CardsScreen
                                    onCardClick={setIsShowModal}
                                ></CardsScreen>
                            }
                        ></Route>
                        <Route path="/login" element={<Login></Login>}></Route>
                        <Route
                            path="/register"
                            element={<Register></Register>}
                        ></Route>
                        {token ? (
                            <Route
                                path="/panel"
                                element={<AdminBlock></AdminBlock>}
                            ></Route>
                        ) : (
                            ""
                        )}
                        <Route path="/*" element={"You have no access"}></Route>
                    </Routes>
                </main>

                {isShowModal ? (
                    <ModalConfirm onCloseModal={onCloseModal}></ModalConfirm>
                ) : (
                    ""
                )}
            </div>
        </BrowserRouter>
    );
};

export default App;
