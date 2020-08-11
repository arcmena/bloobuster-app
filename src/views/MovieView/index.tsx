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
                <MediaCarousel title="Action" media={action} />
            </div>
            <div>
                <MediaCarousel title="Adventure" media={adventure} />
            </div>
            <div>
                <MediaCarousel title="Animation" media={animation} />
            </div>
            <div>
                <MediaCarousel title="Sci-Fi" media={scifi} />
            </div>
        </Content>
    );
};

export default MovieView;
