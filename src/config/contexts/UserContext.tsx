import React, { FunctionComponent, createContext, useState } from "react";

import api from "../../services/api";

interface ContextInterface {
    children: React.ReactNode;
}

interface initContextProps {
    login: Function;
    currentUser: JSON;
    logged: Boolean;
}

export const UserContext = createContext({} as initContextProps);

export const UserProvider: FunctionComponent<ContextInterface> = ({
    children,
}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [logged, setLogged] = useState(false);

    const login = (values: any) => {
        api.post("/login", values)
            .then(({ data }) => setData(data))
            .catch((error) => console.error(error.message));
    };

    const setData = ({ token, user }) => {
        localStorage.token = token;
        setLogged(true);
        setCurrentUser(user);
    };

    const providerValue = {
        login,
        currentUser,
        logged,
    };

    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    );
};
