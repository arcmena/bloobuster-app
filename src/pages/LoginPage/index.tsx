import React, { useState, FormEvent, useContext, ChangeEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

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

import { UserContext } from "../../config/contexts/UserContext";

export const LoginPage = () => {
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);

    const { login } = useContext(UserContext);

    const history = useHistory();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const logData = await login(values);

        if (!logData) return;

        setLoading(true);
        setTimeout(() => {
            history.push("/");
        }, 3000);
    };

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <Container>
            <RightPainel>
                <h2>Bloobuster</h2>
                <FormWhrapper>
                    <FormDiv>
                        {!loading ? (
                            <div>
                                <h1>Login</h1>
                                <LoginForm
                                    onChange={handleChange}
                                    onSubmit={handleSubmit}
                                />
                                <h3>Forgot Password?</h3>
                            </div>
                        ) : (
                            <SyncLoader
                                loading={loading}
                                color={"#fafafa"}
                                size={25}
                            />
                        )}
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
