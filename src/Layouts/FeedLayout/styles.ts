import styled from 'styled-components';

import { Movie } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 1420px;
    height: 100%;
    background: #102538;
    margin: auto;
    padding: 10px 0 25px;

    border-radius: 50px 50px 0 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const MenuDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        list-style: none;
    }

    li {
        color: #fafafa;
        float: left;
        margin-left: 10px;
        font-family: 'Oxygen';
        font-size: 25px;

        cursor: pointer;

        transition: font-size 0.3s;

        &.active {
            border-bottom: 2px solid rgba(255, 44, 44, 0.7);
        }

        &:hover {
            font-size: 26px;
        }
    }
`;

export const Posts = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 600px;

    margin: 52px 52px auto 0;
`;

export const CreateAPost = styled.div`
    display: flex;
    align-items: center;

    background: #ffffff;
    height: 45px;
    width: 100%;
    border-radius: 12.5px;

    font-family: 'Oxygen';
    font-size: 20px;

    cursor: pointer;

    span {
        margin-left: 15px;
        color: #a3a3a3;
    }

    > svg {
        margin: 0 15px 0 auto;
    }
`;

export const MovieIcon = styled(Movie)`
    width: 30px;
    height: 30px;
    color: rgba(255, 44, 44, 0.9);
`;

export const PreviewDiv = styled.div`
    text-align: center;

    margin: 52px 0 auto 0;
`;
