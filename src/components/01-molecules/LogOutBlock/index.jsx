import style from "./index.module.css";

import React, { useEffect, useState } from "react";

import Button from "components/00-atoms/Button";
import ButtonSmall from "components/00-atoms/ButtonSmall";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUserToken } from "store/userSlice";

import { useNavigate } from "react-router-dom";

const LogOutBlock = (props) => {
    const { children, card } = props;
    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleLogOut = () => {
        dispatch(removeUserToken());
        console.log(logout);
        nav("/login");
    };

    return (
        <div className={style["block"]}>
            <Link to="/panel">
                <Button>Admin panel</Button>
            </Link>
            <Link to="/">
                <ButtonSmall onClick={handleLogOut}>Logout</ButtonSmall>
            </Link>
        </div>
    );
};

export default LogOutBlock;
