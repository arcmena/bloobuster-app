import styled from 'styled-components';

import { Send } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background: #ffffff;
    width: 100%;
    border-radius: 12.5px;

    font-family: 'Oxygen';

    margin-top: 22px;

    img {
        height: 235px;
        border-radius: 10px 0 0 10px;
    }

    > div {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    label {
        color: #606060;
        margin-bottom: 5px;
    }

    span {
        color: #2b2b2b;
        font-size: 18px;
        margin-bottom: 16px;
    }
`;

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    margin-top: auto;
`;

export const SeeFullButton = styled(Send)`
    height: 30px;
    width: 30px;
    color: rgba(255, 44, 44, 0.8);
    margin-left: auto;
`;
