import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { WelcomePage } from "./pages/WelcomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={WelcomePage} exact />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
