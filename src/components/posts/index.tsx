import React, { FunctionComponent } from 'react';

import { Container, SeeFullButton, Bottom } from './styles';

interface ReviewInterface {
    authorName: string;
    content: string;
    titleId: string;
    title: string;
    titleImg: string;
}

export const Review: FunctionComponent<ReviewInterface> = ({
    authorName,
    content,
    title,
    titleImg,
}) => {
    return (
        <Container>
            <img src={titleImg} alt="movieposter.jpg" />
            <div>
                <label>{authorName}</label>
                <span>talks about: {title}</span>
                <p>{content}</p>
                <Bottom>
                    <SeeFullButton />
                </Bottom>
            </div>
        </Container>
    );
};
