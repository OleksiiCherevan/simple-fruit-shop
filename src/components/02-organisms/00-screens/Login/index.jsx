import style from "./index.module.css";

import React, { useEffect, useState } from "react";

import FieldWithErrorRule from "components/00-atoms/FieldWithErrorRule";
import Button from "components/00-atoms/Button";
import ButtonSmall from "components/00-atoms/ButtonSmall";
import PasswordFieldWithErrorRule from "components/00-atoms/PasswordFieldWithErrorRule";
import { nameValidation, passwordValidation } from "assets/errors";
import { LINK_LOGIN, LINK_REGISTER } from "assets/links";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserToken } from "store/userSlice";
let base64 = require("base-64");

const Login = (props) => {
    const { children, card } = props;
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [isNameCorrect, setIsNameCorrect] = useState("");
    const [isPasswordCorrect, setIsPasswordCorrect] = useState("");

    let nav = useNavigate();

    const handleLogin = () => {
        if (!isNameCorrect || !isPasswordCorrect) {
            alert("Check fields");
            return;
        }

        let headers = {};
        headers["Content-Type"] = "application/json";
        headers["Authorization"] =
            "Basic " + base64.encode(name + ":" + password);

        let requestOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ username: name, password: password }),
        };

        try {
            fetch(LINK_LOGIN, requestOptions)
                .then((res) =>
                    res.json().then((data) => {
                        let token = data.token;
                        dispatch(setUserToken({ token: token }));

                        nav("/");
                    })
                )
                .catch((e) => alert("Incorrect name or password"));
        } catch (e) {
            alert("Check fields " + e);
        }
    };

    return (
        <div className={style["block"]}>
            <div className={style["fields"]}>
                <FieldWithErrorRule
                    placeholder="username"
                    value={name}
                    onChange={(text, isValid) => {
                        setName(text);
                        setIsNameCorrect(isValid);
                    }}
                    validation={nameValidation}
                ></FieldWithErrorRule>
                <PasswordFieldWithErrorRule
                    placeholder="password"
                    value={password}
                    onChange={(text, isValid) => {
                        setPassword(text);
                        setIsPasswordCorrect(isValid);
                    }}
                    validation={passwordValidation}
                ></PasswordFieldWithErrorRule>

                <Button onClick={handleLogin}>Login</Button>
                <Link to="/register">Want to create a new account?</Link>
                <Link to="/">
                    <ButtonSmall> Main page</ButtonSmall>
                </Link>
            </div>
        </div>
    );
};

export default Login;
