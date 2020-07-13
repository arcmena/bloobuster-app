import React from 'react';

import { UserProvider } from './config/contexts/UserContext';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
    return (
        <UserProvider>
            <Routes />
            <GlobalStyles />
        </UserProvider>
    );
}

export default App;
