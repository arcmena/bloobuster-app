import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import { WelcomePage } from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';

import { UserContext } from './config/contexts/UserContext';

import { ProfileProvider } from './config/contexts/ProfileContext';

const Routes = () => {
    const { logged, refreshToken } = useContext(UserContext);

    useEffect(() => {
        refreshToken();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {!logged ? (
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    {/* <Route path="/welcome" component={WelcomePage} /> */}
                    <Route path="/signup" component={SignUpPage} />
                </Switch>
            ) : (
                <ProfileProvider>
                    <Switch>
                        <Route path="/" component={Dashboard} />
                    </Switch>
                </ProfileProvider>
            )}
        </>
    );
};

export default Routes;
