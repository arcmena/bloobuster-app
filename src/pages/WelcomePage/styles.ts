import styled from "styled-components";

import {
    PlayCircleFilled,
    ArrowRightAlt,
} from "styled-icons/material-outlined";

export const Container = styled.div`
    height: 100vh;
    display: flex;

    img {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 36%;
    }
`;
export const TextDiv = styled.div`
    background-color: #102538;
    max-width: 950px;
    height: 100vh;

    padding: 55px 130px 0px 73px;

    display: flex;
    flex-direction: column;

    color: #fafafa;

    h2 {
        font-family: "Reem Kufi";
        font-size: 24pt;
        font-weight: normal;
    }

    h1 {
        padding-top: 80px;
        font-family: "Rubik";
        font-size: 34pt;
        font-weight: normal;
    }

    h4 {
        font-family: "Oxygen";
        font-size: 15pt;
        font-weight: normal;
        color: #c0c0c0;
    }
`;

export const LearnMore = styled.div`
    display: flex;
    align-items: center;

    cursor: pointer;

    padding-top: 80px;

    width: 160px;

    span {
        font-family: "Rubik";
        font-size: 15pt;
    }
`;

export const PlayIcon = styled(PlayCircleFilled)`
    width: 55px;
    height: 55px;
    color: #ff2c2c;
`;

export const JoinUsButton = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 250px;
    height: 88px;
    background-color: #ff2c2c;

    bottom: 0px;

    cursor: pointer;

    span {
        font-family: "Rubik";
        font-size: 15pt;
        color: #fafafa;
    }

    transition: background-color 0.3s;

    &:hover {
        background-color: #c41f1f;
    }
`;
export const LeftArrow = styled(ArrowRightAlt)`
    width: 55px;
    height: 55px;
    color: #fafafa;
`;
