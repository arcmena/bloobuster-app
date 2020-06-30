import React, { FormEvent } from "react";
import { Link } from "react-router-dom";

import { LoginForm } from "../../components";

import {
    Container,
    RightPainel,
    FormWhrapper,
    FormDiv,
    SignUp,
    RightArrow,
    GoBack,
    LeftArrow,
} from "./styles";

import Boy from "../../assets/boy-wider.png";

export const LoginPage = () => {
    function onSubmit(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <Container>
            <RightPainel>
                <h2>Bloobuster</h2>
                <FormWhrapper>
                    <FormDiv>
                        <h1>Login</h1>
                        <LoginForm onChange onSubmit={onSubmit} />
                        <h3>Forgot Password?</h3>
                    </FormDiv>
                </FormWhrapper>
                <Link to="/signup">
                    <SignUp>
                        <span>
                            Don’t have an account? <span>Sing up!</span>
                        </span>
                        <RightArrow />
                    </SignUp>
                </Link>
            </RightPainel>
            <img src={Boy} alt="boy.png" />
            <Link to="/">
                <GoBack>
                    <LeftArrow />
                    <span>go back</span>
                </GoBack>
            </Link>
        </Container>
    );
};
