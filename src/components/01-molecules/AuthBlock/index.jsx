import style from "./index.module.css";

import React, { useEffect, useState } from "react";

import FieldWithErrorRule from "components/00-atoms/FieldWithErrorRule";
import Button from "components/00-atoms/Button";
import ButtonSmall from "components/00-atoms/ButtonSmall";
import PasswordFieldWithErrorRule from "components/00-atoms/PasswordFieldWithErrorRule";
import { nameValidation, passwordValidation } from "assets/errors";
import { LINK_REGISTER } from "assets/links";
import { Link } from "react-router-dom";

const AuthBlock = (props) => {
    const { children, card } = props;

    return (
        <div className={style["block"]}>
            <Link to="/login">
                <Button>Login</Button>
            </Link>
            <Link to="/register">
                <ButtonSmall>Register</ButtonSmall>
            </Link>
        </div>
    );
};

export default AuthBlock;
