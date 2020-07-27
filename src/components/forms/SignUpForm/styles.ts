import styled from "styled-components";

export const Form = styled.form`
    width: 540px;

    textarea:focus,
    input:focus,
    button:focus {
        outline: none;
    }

    input,
    label {
        display: block;
    }

    label {
        font-family: "Oxygen";
        margin-bottom: 5px;
    }

    div {
        margin-bottom: 30px;
    }
`;

export const Input = styled.input`
    padding: 0px 15px;
    background-color: #e3e3e3;
    height: 35px;
    width: 250px;
    border: none;
    border-radius: 6px;
    font-size: 12pt;

    transition: box-shadow 0.1s;
    transition: background-color 0.2s linear;

    &:hover {
        box-shadow: 0 0 3pt 3pt rgba(12, 53, 159, 0.2);
        background-color: #fafafa;
    }

    &:target {
        border: solid 1px #102538;
    }
`;

export const FName = styled.div`
    float: left;
    margin-right: 40px;
`;

export const Lname = styled.div``;

export const Username = styled.div`
    float: left;
    margin-right: 40px;
`;

export const Email = styled.div``;

export const Pass = styled.div`
    float: left;
    margin-right: 40px;
`;

export const ConfPass = styled.div``;

export const FinishButton = styled.button`
    background-color: #ff2c2c;
    border: none;
    width: 95px;
    height: 40px;
    color: #fafafa;
    font-size: 13pt;
    font-family: "Rubik";

    cursor: pointer;

    transition: background-color 0.2s;

    &:hover {
        background-color: #c41f1f;
    }
`;

export const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
// export const Form = styled.form``;
// export const Form = styled.form``;
