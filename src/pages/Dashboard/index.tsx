import React, { useEffect, useContext } from "react";

import { UserContext } from "../../config/contexts/UserContext";
import { Feed } from "../../components";

export const Dashboard = () => {
    const { currentUser, logged } = useContext(UserContext);

    return (
        <div>
            <h1>dashboard</h1>
            <h2>Olá {currentUser.username}</h2>
            <Feed />
        </div>
    );
};