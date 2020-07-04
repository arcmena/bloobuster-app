import styled from "styled-components";
import { Done } from "styled-icons/material-outlined";

export const Container = styled.div`
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(37, 43, 70, 0.58);
    z-index: 2;
    animation: fadein 0.5s;
    -moz-animation: fadein 0.5s; /* Firefox */
    -webkit-animation: fadein 0.5s; /* Safari and Chrome */
    -o-animation: fadein 0.5s; /* Opera */
`;

export const MessageDiv = styled.div`
    z-index: 3;
    width: 600px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ease;

    h1,
    h2 {
        color: #fafafa;
        font-family: "Oxygen";
        font-size: 25pt;
        font-weight: normal;
    }

    h1 {
        padding-bottom: 50px;
    }

    h2 {
        padding-bottom: 15px;
    }
`;

export const SuccessIcon = styled(Done)`
    height: 50px;
    width: 50px;

    color: #66db00;
`;
