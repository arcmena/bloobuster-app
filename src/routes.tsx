import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Pages
import { WelcomePage } from "./pages/WelcomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { Feed } from "./pages/Feed";

import { UserContext } from "./config/contexts/UserContext";

const Routes = () => {
    const { logged } = useContext(UserContext);

    return (
        <BrowserRouter>
            {!logged ? (
                <Switch>
                    <Route exact path="/" component={WelcomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignUpPage} />
                </Switch>
            ) : (
                <Switch>
                    <Route exact path="/" component={Feed} />
                </Switch>
            )}
        </BrowserRouter>
    );
};

export default Routes;
