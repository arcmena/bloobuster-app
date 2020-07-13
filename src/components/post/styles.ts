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
        padding: 12.5px;
    }
`;

export const SeeFullButton = styled.div``;
