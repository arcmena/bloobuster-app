import React, { FormEvent } from "react";
import { Link } from "react-router-dom";

import { SignUpForm } from "../../components";

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

import Boidog from "../../assets/boidog.png";

export const SignUpPage = () => {
    function onSubmit(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <Container>
            <RightPainel>
                <h2>Bloobuster</h2>
                <h3>Sign Up</h3>
                <FormDiv>
                    <SignUpForm onChange onSubmit={onSubmit} />
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
