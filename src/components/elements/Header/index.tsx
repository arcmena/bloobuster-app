import React, { FunctionComponent, useContext, useEffect } from 'react';

import { ProfileContext } from '../../../config/contexts/ProfileContext';

import { Container, ButtonsDiv, ProfileIcon, FavoriteIcon } from './styles';

const Header: FunctionComponent = () => {
    const { isOpen, setOpen } = useContext(ProfileContext);

    const handleProfile = () => {
        if (!isOpen) {
            return setOpen(true);
        }
        return setOpen(false);
    };

    return (
        <Container>
            <h1>Bloobuster</h1>
            <ButtonsDiv>
                <label>name</label>
                <ProfileIcon onClick={handleProfile} />
                <FavoriteIcon />
            </ButtonsDiv>
        </Container>
    );
};

export default Header;
