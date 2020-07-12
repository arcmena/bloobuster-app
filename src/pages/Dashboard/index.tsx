import React, { useEffect, useContext } from 'react';

import { UserContext } from '../../config/contexts/UserContext';
import FeedLayout from '../../Layouts/FeedLayout';

export const Dashboard = () => {
    const { logged, setLogged } = useContext(UserContext);

    return (
        <div>
            <h1>dashboard</h1>
            <FeedLayout />
        </div>
    );
};
