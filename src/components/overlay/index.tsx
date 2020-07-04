import React, { FunctionComponent } from "react";

import { Container, MessageDiv, SuccessIcon } from "./styles";

interface OverlayInterface {
    text: string;
}

export const Overlay: FunctionComponent<OverlayInterface> = ({ text }) => {
    return (
        <Container>
            <MessageDiv>
                <SuccessIcon />
                <h1>Account created</h1>
                <h2>{text}</h2>
                <h2>You can now login to your account</h2>
            </MessageDiv>
        </Container>
    );
};
