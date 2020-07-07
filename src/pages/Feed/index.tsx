import React, { useEffect, useContext } from "react";

import { UserContext } from "../../config/contexts/UserContext";

export const Feed = () => {
    const { currentUser, logged } = useContext(UserContext);

    useEffect(() => {
        console.log(currentUser);
        console.log(logged);
    }, []);

    return (
        <div>
            <h1>esse é feed</h1>
            <h2>aaaaaaaaaaaa</h2>
        </div>
    );
};
