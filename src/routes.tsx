import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import { WelcomePage } from './pages/WelcomePage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';

import { UserContext } from './config/contexts/UserContext';

const Routes = () => {
    const { logged, refreshToken } = useContext(UserContext);

    useEffect(() => {
        refreshToken();
        //eslint-disable-next-line
    }, []);

    return (
        <BrowserRouter>
            {!logged ? (
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    {/* <Route path="/welcome" component={WelcomePage} /> */}
                    <Route path="/signup" component={SignUpPage} />
                </Switch>
            ) : (
                    <Switch>
                        <Route path="/" component={Dashboard} />
                    </Switch>
                )}
        </BrowserRouter>
    );
};

export default Routes;
