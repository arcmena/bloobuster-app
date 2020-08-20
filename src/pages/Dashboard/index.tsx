import React, { FunctionComponent, useContext } from 'react';

import { ProfileContext } from '../../config/contexts/ProfileContext';

import DashboardLayout from '../../layouts/DashboardLayout';

import { Header, Profile } from '../../components';

import { Container } from './styles';

const Dashboard: FunctionComponent = () => {
    const { isOpen } = useContext(ProfileContext);

    return (
        <Container>
            <Header />
            {isOpen ? <Profile /> : null}
            <DashboardLayout />
        </Container>
    );
};

export default Dashboard;
