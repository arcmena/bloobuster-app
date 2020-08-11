import React, { FunctionComponent, useState, useEffect } from 'react';

//Interfaces
import { Action, Adventure, Animation, Scifi } from '../../types/ViewsTypes';

import { Content } from './styles';

import { MediaCarousel } from '../../components';

import api from '../../services/api';

const MovieView: FunctionComponent = () => {
    const [action, setAction] = useState<Action[]>([]);
    const [adventure, setAdventure] = useState<Adventure[]>([]);
    const [animation, setAnimation] = useState<Animation[]>([]);
    const [scifi, setScifi] = useState<Scifi[]>([]);

    // useEffect(() => {
    //     api.get('/movieIndex').then(({ data }) => {
    //         setAction(data.action);
    //         setAdventure(data.adventure);
    //         setAnimation(data.animation);
    //         setScifi(data.scifi);
    //     });
    // }, []);

    return (
        <Content>
            <div>
                <MediaCarousel title="Action" movies={action} />
            </div>
            <div>
                <MediaCarousel title="Adventure" movies={adventure} />
            </div>
            <div>
                <MediaCarousel title="Animation" movies={animation} />
            </div>
            <div>
                <MediaCarousel title="Sci-Fi" movies={scifi} />
            </div>
        </Content>
    );
};

export default MovieView;
