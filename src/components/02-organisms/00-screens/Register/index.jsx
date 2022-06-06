import style from "./index.module.css";

import React, { useEffect, useState } from "react";

import FieldWithErrorRule from "components/00-atoms/FieldWithErrorRule";
import Button from "components/00-atoms/Button";
import ButtonSmall from "components/00-atoms/ButtonSmall";
import PasswordFieldWithErrorRule from "components/00-atoms/PasswordFieldWithErrorRule";
import { nameValidation, passwordValidation } from "assets/errors";
import { LINK_REGISTER } from "assets/links";
import { Link, useNavigate } from "react-router-dom";

const Register = (props) => {
    const { children, card } = props;

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const [isNameCorrect, setIsNameCorrect] = useState("");
    const [isPasswordCorrect, setIsPasswordCorrect] = useState("");
    const [isRePasswordCorrect, setIsRePasswordCorrect] = useState("");

    const [isPasswordsTheSame, setIsPasswordsTheSame] = useState(true);

    useEffect(() => {
        if (password != rePassword) {
            setIsPasswordsTheSame(false);
        } else {
            setIsPasswordsTheSame(true);
        }
    }, [password, rePassword]);

    let nav = useNavigate();

    const handleRegister = () => {
        let res = null;

        if (!isNameCorrect || !isPasswordCorrect || !isRePasswordCorrect) {
            alert("check fields");
            return;
        }
        if (!isPasswordsTheSame) {
            alert("passwords are different");
            return;
        }

        let requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: name, password: password }),
        };

        try {
            fetch(LINK_REGISTER, requestOptions)
                .then((res) =>
                    res.json().then((data) => {
                        alert("User was created");
                        nav("/");
                    })
                )
                .catch((e) => alert("Check your fields!"));
        } catch {
            alert("Check fields");
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
                <PasswordFieldWithErrorRule
                    placeholder="confirm password"
                    value={rePassword}
                    isError={!isPasswordsTheSame}
                    _errorMessage={
                        isPasswordsTheSame
                            ? "Passwords are different or incorrect!"
                            : ""
                    }
                    onChange={(text, isValid) => {
                        setRePassword(text);
                        setIsRePasswordCorrect(isValid);
                    }}
                    validation={passwordValidation}
                ></PasswordFieldWithErrorRule>

                <Button onClick={handleRegister}>Register</Button>
                <Link to="/login">Already have an account?</Link>
                <Link to="/">
                    <ButtonSmall> Main page</ButtonSmall>
                </Link>
            </div>
        </div>
    );
};

export default Register;
