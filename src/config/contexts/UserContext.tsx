import React, { FunctionComponent, createContext, useState } from "react";

import api from "../../services/api";

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
}

export const UserContext = createContext({} as InitContextProps);

export const UserProvider: FunctionComponent<ContextInterface> = ({
    children,
}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [logged, setLogged] = useState(false);

    const login = (values: any) => {
        api.post("/login", values)
            .then(({ data }) => {
                setUserData(data);
                setTimeout(() => {
                    setLogged(true);
                }, 1000);
                return "ok";
            })
            .catch((error) => console.error(error.message));
    };

    const setUserData = ({ token, user }) => {
        localStorage.token = token;
        setCurrentUser(user);
    };

    const providerValue = {
        login,
        currentUser,
        logged,
        setLogged,
    };

    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    );
};
