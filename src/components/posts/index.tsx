import React, { FunctionComponent } from 'react';

import { Container, SeeFullButton, Bottom, StarRatings } from './styles';

interface ReviewInterface {
    authorName: string;
    content: string;
    titleId: string;
    title: string;
    titleImg: string;
    rating: number;
}

export const Review: FunctionComponent<ReviewInterface> = ({ authorName, content, title, titleImg, rating }) => {
    const ratingStars = [];

    for (let i = 1; i <= rating; i++) {
        ratingStars.push(<StarRatings />);
    }

    return (
        <Container>
            <img src={titleImg} alt="movieposter.jpg" />
            <div>
                <label>{authorName}</label>
                <span>talks about: {title}</span>
                <p>{content}</p>
                <Bottom>
                    <label>User Rating: </label>
                    {ratingStars}
                    <SeeFullButton />
                </Bottom>
            </div>
        </Container>
    );
};
