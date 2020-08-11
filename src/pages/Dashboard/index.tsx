import React, { useEffect, useContext } from 'react';

import { UserContext } from '../../config/contexts/UserContext';

import DashboardLayout from '../../layouts/DashboardLayout';

import { Header } from '../../components';

import { Container } from './styles';

const Dashboard = () => {
    // const { logged, setLogged } = useContext(UserContext);

    return (
        <Container>
            <Header /
            <DashboardLayout />
        </Container>
    );
};

export default Dashboard;
