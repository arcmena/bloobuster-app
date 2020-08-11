import React, { useEffect, useContext } from 'react';

import { UserContext } from '../../config/contexts/UserContext';
import DashboardLayout from '../../layouts/DashboardLayout';

const Dashboard = () => {
    // const { logged, setLogged } = useContext(UserContext);

    return (
        <div>
            {/* <Header/> */}
            <h1>dashboard</h1>
            <DashboardLayout />
        </div>
    );
};

export default Dashboard;
