import styled from 'styled-components';

import { KeyboardReturn, PlayCircleFilled } from '../../assets/styles/Icons';

export const Container = styled.div`
    height: 100vh;
    display: flex;

    background-color: #102538;

    img {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 32%;
    }

    h3 {
        padding-top: 70px;
        font-family: 'Oxygen';
        font-size: 18pt;
        font-weight: normal;
    }
`;

export const FormDiv = styled.div`
    padding-top: 30px;
`;

export const RightPainel = styled.div`
    margin-left: auto;
    width: 950px;

    padding: 55px 73px 0px 195px;

    background-color: #fafafa;

    h2 {
        font-family: 'Reem Kufi';
        font-size: 24pt;
        font-weight: normal;
        color: #ff2c2c;
        float: right;
        pointer-events: none;
    }
`;

export const GoBack = styled.div`
    position: absolute;
    left: 0;

    color: #fafafa;

    margin: 55px 0 0 73px;

    span {
        font-family: 'Reem Kufi';
        font-weight: normal;
        font-size: 14pt;
    }

    margin: 55px 0 0 73px;
`;

export const LeftArrow = styled(KeyboardReturn)`
    width: 35px;
    height: 30px;
    color: #ff2c2c;
`;

export const More = styled.div`
    position: absolute;
    left: 0;

    margin: 110px 0 0 48px;

    color: #fafafa;

    font-family: 'Rubik';
    font-size: 20pt;
`;

export const WatchVideo = styled.div`
    position: absolute;
    left: 0;

    margin: 190px 0 0 48px;

    color: #fafafa;

    font-family: 'Oxygen';

    display: flex;
    align-items: center;
    font-size: 13pt;

    pointer-events: none;
`;

export const PlayIcon = styled(PlayCircleFilled)`
    width: 45px;
    height: 45px;
    color: #ff2c2c;
`;
