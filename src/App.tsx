import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserProvider } from './config/contexts/UserContext';
import Routes from './routes';
import GlobalStyles from './assets/styles/GlobalStyles';

const App: FunctionComponent = () => {
    return (
        <UserProvider>
            <Router>
                <Routes />
            </Router>
            <GlobalStyles />
        </UserProvider>
    );
};

export default App;
