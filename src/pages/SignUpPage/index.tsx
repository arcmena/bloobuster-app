import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { Link, useHistory } from "react-router-dom";

import { SignUpForm, Overlay } from "../../components";

import {
    Container,
    RightPainel,
    FormDiv,
    GoBack,
    LeftArrow,
    More,
    WatchVideo,
    PlayIcon,
} from "./styles";

import api from "../../services/api";

import Boidog from "../../assets/boidog.png";

export const SignUpPage = () => {
    const [inputValues, setInputValues] = useState({
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confPassword: "",
    });

    const [success, setSucess] = useState(false);

    const history = useHistory();

    async function onSubmit(e: FormEvent) {
        e.preventDefault();

        if (inputValues.password !== inputValues.confPassword) {
            alert("Passwords don't match");
            return;
        }

        const userData = {
            ...inputValues,
            name: `${inputValues.firstname} ${inputValues.lastname}`,
        };

        await api.post("/createUser", userData);

        setSucess(true);
        setTimeout(() => {
            history.push("/login");
        }, 5000);
    }

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    }

    return (
        <Container>
            {success ? (
                <Overlay text={`Nice to meet you ${inputValues.firstname}!`} />
            ) : (
                <div></div>
            )}
            <RightPainel>
                <h2>Bloobuster</h2>
                <h3>Sign Up</h3>
                <FormDiv>
                    <SignUpForm onChange={onChange} onSubmit={onSubmit} />
                </FormDiv>
            </RightPainel>
            <Link to="/login">
                <GoBack>
                    <LeftArrow />
                    <span>go back</span>
                </GoBack>
            </Link>
            <More>
                Want to know more about
                <br /> Bloobuster’s community?
            </More>
            <WatchVideo>
                <PlayIcon />
                <span>Watch our introdutory video</span>
            </WatchVideo>
            <img src={Boidog} alt="boyandog.png" />
        </Container>
    );
};
