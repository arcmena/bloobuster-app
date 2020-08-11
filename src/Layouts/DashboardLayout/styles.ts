import styled from 'styled-components';

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
    min-height: 100vh;
`;

export const MenuDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    margin-top: 15px;

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
