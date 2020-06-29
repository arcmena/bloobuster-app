import React from "react";

import { Link } from "react-router-dom";

import { Whrapper, TextDiv, JoinUsButton, LeftArrow } from "./styles";

import Boy from "../../assets/boy-wider.png";

export const LoginPage = () => {
    return (
        <Whrapper>
            <TextDiv>
                <h2>Bloobuster</h2>

                <Link to="/login">
                    <JoinUsButton>
                        <span>Join us!</span>
                        <LeftArrow />
                    </JoinUsButton>
                </Link>
            </TextDiv>
            <img src={Boy} alt="boy.png" />
        </Whrapper>
    );
};
