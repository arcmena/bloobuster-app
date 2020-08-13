import React, { FunctionComponent } from 'react';

import { Container, SeeFullButton, Bottom, StarRatings } from './styles';

import { PostInterface } from '../../../types/ComponentTypes';

const Post: FunctionComponent<PostInterface> = ({ authorName, content, title, titleImg, rating }) => {
    const ratingStars = [];

    for (let i = 1; i <= rating; i++) {
        ratingStars.push(<StarRatings key={i} />);
    }

    return (
        <Container>
            {title ? (
                <>
                    <img src={titleImg} alt="Movie Poster" />
                    <div>
                        <label>{authorName}</label>
                        <span>talks about: {title}</span>
                        <p>{content.substr(0, 150).concat('...')}</p>
                        <Bottom>
                            <label>User Rating: </label>
                            {ratingStars}
                            <SeeFullButton />
                        </Bottom>
                    </div>
                </>
            ) : (
                    <div>
                        <label>{authorName}</label>
                        <p>{content}</p>
                    </div>
                )}
        </Container>
    );
};

export default Post;