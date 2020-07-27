import React, { FunctionComponent, createContext, useState } from 'react';

import api from '../../services/api';

interface ContextInterface {
    children: React.ReactNode;
}

interface InitContextProps {
    login: Function;
    currentUser: {
        email: string;
        username: string;
    };
    logged: Boolean;
    setLogged: Function;
    logout: Function;
    refreshToken: Function;
}

export const UserContext = createContext({} as InitContextProps);

export const UserProvider: FunctionComponent<ContextInterface> = ({
    children,
}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [logged, setLogged] = useState(false);

    const login = (values) => {
        api.post('/login', values)
            .then(({ data }) => setUserData(data))
            .catch((error) => console.error(error.message));
    };

    const refreshToken = () => {
        api.get('/refreshToken')
            .then(({ data }) => setUserData(data))
            .catch((error) => console.error(error));
    };

    const logout = () => {
        localStorage.removeItem('token');
    };

    const setUserData = ({ token, user }) => {
        localStorage.token = token;
        setCurrentUser(user);
        setLogged(true);
    };

    const providerValue = {
        login,
        currentUser,
        logged,
        setLogged,
        logout,
        refreshToken,
    };

    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    );
};
