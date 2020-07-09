import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Pages
import { WelcomePage } from "./pages/WelcomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { Dashboard } from "./pages/Dashboard";

import { UserContext } from "./config/contexts/UserContext";

const Routes = () => {
    const { logged, refreshToken } = useContext(UserContext);

    useEffect(() => {
        refreshToken();
    }, []);

    return (
        <BrowserRouter>
            {!logged ? (
                <Switch>
                    <Route path="/welcome" component={WelcomePage} />
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/signup" component={SignUpPage} />
                </Switch>
            ) : (
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            )}
        </BrowserRouter>
    );
};

export default Routes;
