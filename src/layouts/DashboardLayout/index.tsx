import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';

import FeedView from '../../views/FeedView';
import DiscoverView from '../../views/DiscoverView';

import { Container, Content, MenuDiv } from './styles';

const DashboardLayout: FunctionComponent = () => {
    const location = useLocation();

    const [menu, setMenu] = useState(location.pathname);

    const setMenuClass = (e) => {
        const { id } = e.target;
        if (menu !== id) setMenu(id);
    };

    return (
        <Container>
            <MenuDiv>
                <ul>
                    <Link to="/">
                        <li className={`${menu === '/' ? 'active' : ''}`} id="/" onClick={setMenuClass}>
                            feed
                        </li>
                    </Link>

                    <Link to="/discover">
                        <li className={`${menu === '/discover' ? 'active' : ''}`} id="/discover" onClick={setMenuClass}>
                            discover
                        </li>
                    </Link>
                </ul>
            </MenuDiv>
            <Content>
                <Switch>
                    <Route exact path="/" component={FeedView} />
                    <Route exact path="/discover" component={DiscoverView} />
                </Switch>
            </Content>
        </Container>
    );
};

export default DashboardLayout;
