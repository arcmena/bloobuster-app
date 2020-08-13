import React, { FunctionComponent } from 'react';

import { Container, ButtonsDiv, ProfileIcon, FavoriteIcon } from './styles';

const Header: FunctionComponent = () => {
    return (
        <Container>
            <h1>Bloobuster</h1>
            <ButtonsDiv>
                <label>name</label>
                <ProfileIcon />
                <FavoriteIcon />
            </ButtonsDiv>
        </Container>
    );
}

export default Header;