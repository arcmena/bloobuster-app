import React from 'react';
import { Link } from 'react-router-dom';

import { Container, TextDiv, LearnMore, PlayIcon, JoinUsButton, LeftArrow } from './styles';

import Girl from '../../assets/girl-wider.png';

export const WelcomePage = () => {
    return (
        <Container>
            <TextDiv>
                <h2>Bloobuster</h2>
                <LearnMore>
                    <PlayIcon />
                    <span>Learn More</span>
                </LearnMore>

                <h1>A new way to share and talk about media.</h1>

                <h4>
                    Bloobuster is an APP made to share tv shows and movies experiences. Here you can publish reviews,
                    create posts and discuss about what you loved... or hated about them.
                </h4>
                <Link to="/">
                    <JoinUsButton>
                        <span>Join us!</span>
                        <LeftArrow />
                    </JoinUsButton>
                </Link>
            </TextDiv>
            <img src={Girl} alt="girl.png" />
        </Container>
    );
};
