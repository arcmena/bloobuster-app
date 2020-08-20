import React, { FunctionComponent, useContext, useEffect, useState } from 'react';

import { Container } from './styles';

import { UserContext } from '../../config/contexts/UserContext';

const Profile: FunctionComponent = () => {
    const [user, setUSer] = useState(localStorage.user);

    useEffect(() => {
        console.log(user);
        console.log(localStorage.user);
    }, [user]);

    return (
        <div>
            <h1>esse ser o perfil</h1>
        </div>
    );
};

export default Profile;
