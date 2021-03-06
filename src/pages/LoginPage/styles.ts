import styled from 'styled-components';

import { KeyboardTab, KeyboardReturn } from '../../assets/styles/Icons';

export const Container = styled.div`
    height: 100vh;
    display: flex;

    background-color: #fafafa;

    img {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 75%;
    }
`;
export const RightPainel = styled.div`
    background-color: #102538;
    margin-left: auto;
    width: 1320px;
    height: 100vh;

    padding: 55px 73px 0px 73px;

    display: flex;
    flex-direction: column;

    color: #fafafa;

    h2 {
        font-family: 'Reem Kufi';
        font-size: 24pt;
        font-weight: normal;
        margin-left: auto;
        pointer-events: none;
    }
`;

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: auto;

    background-color: rgba(17, 45, 70, 0.85);

    height: 535px;
    width: 600px;

    text-align: center;

    h1 {
        margin-bottom: 25px;
        font-family: 'Rubik';
        font-size: 55pt;
        font-weight: normal;
    }

    h3 {
        margin-top: 30px;
        font-family: 'Oxygen';
        font-size: 12pt;
        font-weight: normal;
    }
`;

export const FormWhrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    height: 80%;
`;

export const SignUp = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 270px;

    /* right: 0; */
    /* margin: 5px 230px 0 0; */

    span {
        font-family: 'Oxygen';
        font-size: 12pt;
        font-weight: normal;
        color: #fafafa;
        text-decoration: none;

        span {
            color: #ff2c2c;
            padding-right: 5px;
        }
    }
`;

export const RightArrow = styled(KeyboardTab)`
    width: 35px;
    height: 35px;
    color: #ff2c2c;
`;

export const GoBack = styled.div`
    position: absolute;
    left: 0;
    color: #ff2c2c;

    margin: 55px 0 0 73px;

    span {
        font-family: 'Reem Kufi';
        font-weight: normal;
        font-size: 14pt;
    }
`;

export const LeftArrow = styled(KeyboardReturn)`
    width: 35px;
    height: 30px;
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
        font-family: 'Rubik';
        font-size: 15pt;
        color: #fafafa;
    }
`;
