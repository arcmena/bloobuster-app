import styled, { css } from 'styled-components';

import { AlternateEmail, Lock } from '../../../assets/styles/Icons';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    textarea:focus,
    input:focus,
    button:focus {
        outline: none;
    }

    input {
        height: 30px;
        background: #f0f0f5;
        border: 0;
        padding: 16px 10px;
        font-size: 16px;
        color: #fafafa;
        background: transparent;
    }
`;

export const Username = styled.div`
    display: flex;
    flex-direction: row;
    align-items: initial;
    height: 35px;
    margin-bottom: 20px;
    border-bottom: solid 1px #ff2c2c;
`;

const iconCSS = css`
    width: 30px;
    height: 30px;
    color: rgba(255, 44, 44, 0.5);
`;

export const EmailIcon = styled(AlternateEmail)`
    ${iconCSS}
`;

export const Password = styled.div`
    display: flex;
    flex-direction: row;
    align-items: initial;
    height: 35px;
    margin-bottom: 20px;
    border-bottom: solid 1px #ff2c2c;
`;

export const LockIcon = styled(Lock)`
    ${iconCSS}
`;

export const SignInButton = styled.button`
    width: 100px;
    height: 45px;
    background-color: #ff2c2c;
    color: #fafafa;
    border: 0;
    border-radius: 0;

    span {
        font-family: 'Rubik';
        font-size: 14pt;
    }

    cursor: pointer;

    transition: background-color 0.2s;

    &:hover {
        background-color: #c41f1f;
    }
`;
