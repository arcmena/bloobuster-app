import React, { FunctionComponent, createContext, useState } from 'react';

import api from '../../services/api';

import { InitUserContextProps, UserContextInterface } from '../../types/ContextTypes';

export const UserContext = createContext({} as InitUserContextProps);

export const UserProvider: FunctionComponent<UserContextInterface> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [logged, setLogged] = useState(false);

    const setUserData = ({ token, user }) => {
        localStorage.token = token;
        localStorage.user = JSON.stringify(user);
        setLogged(true);
    };

    const login = (values) => {
        api.post('/login', values)
            .then(({ data }) => setUserData(data))
            .catch((error) => console.error(error.message));
    };

    const refreshToken = () => {
        api.get('/refreshToken')
            .then(({ data: { token } }) => {
                localStorage.token = token;
                setLogged(true);
            })
            .catch((error) => console.error(error));
    };

    const logout = () => {
        localStorage.removeItem('token');
    };

    const providerValue = {
        login,
        currentUser,
        logged,
        setLogged,
        logout,
        refreshToken,
    };

    return <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>;
};
