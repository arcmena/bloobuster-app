import React, { FunctionComponent, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import FeedView from '../../views/FeedView';
import MovieView from '../../views/MovieView';

import { Container, Content, MenuDiv } from './styles';

const DashboardLayout: FunctionComponent = () => {
    const [menu, setMenu] = useState('feed');

    const setMenuClass = (e) => {
        const id = e.target.id;
        if (menu !== id) setMenu(id);
    };

    return (
        <Container>
            <MenuDiv>
                <ul>
                    <Link to="/">
                        <li
                            className={`${menu === 'feed' ? 'active' : ''}`}
                            id="feed"
                            onClick={setMenuClass}
                        >
                            feed
                        </li>
                    </Link>

                    <Link to="/movies">
                        <li
                            className={`${menu === 'movies' ? 'active' : ''}`}
                            id="movies"
                            onClick={setMenuClass}
                        >
                            movies
                        </li>
                    </Link>

                    <Link to="/series">
                        <li
                            className={`${menu === 'series' ? 'active' : ''}`}
                            id="series"
                            onClick={setMenuClass}
                        >
                            series
                        </li>
                    </Link>
                </ul>
            </MenuDiv>
            <Content>
                <Switch>
                    <Route exact path="/" component={FeedView} />
                    <Route exact path="/movies" component={MovieView} />
                </Switch>
            </Content>
        </Container>
    );
};

export default DashboardLayout;
