import React, { FunctionComponent } from 'react';

import { Container, SeeFullButton } from './styles';

import poster from '../../assets/poster.jpg';

const Post: FunctionComponent = () => {
    return (
        <Container>
            <img src={poster} alt="movieposter" />
            <div>
                <label>randomN#3</label>
                <span>talks about: Blade Runner 2049</span>
                <p>
                    A sequel to the 1982 film Blade Runner, the film stars Ryan
                    Gosling and Harrison Ford, with Ana de Armas. Gosling plays
                    K, a Nexus-9 replicant "blade runner" who uncovers a secret
                    that ...
                </p>
                <SeeFullButton />
            </div>
        </Container>
    );
};

export default Post;
