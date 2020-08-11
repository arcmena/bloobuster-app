import React, { FunctionComponent, useState, useEffect } from 'react';

import { IndexPreview, Review } from '../../components';

import api from '../../services/api';

import { Content, Posts, CreateAPost, MovieIcon, PreviewDiv } from './styles';

export interface PostsInterface {
    id: number;
    authorId: number;
    authorInfo: {
        name: string;
        email: string;
    };
    content: string;
    titleId: string;
    title: string;
    titleImg: string;
    rating: number;
}

const Feed: FunctionComponent<PostsInterface> = () => {
    const [posts, setPosts] = useState<PostsInterface[]>([]);

    useEffect(() => {
        api.get('/reviews')
            .then(({ data }) => setPosts(data.reviews))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Content>
            <Posts>
                <CreateAPost>
                    <span>Write a post or a review!</span>
                    <MovieIcon />
                </CreateAPost>
                {posts.map((post) => (
                    <Review
                        key={post.id}
                        authorName={post.authorInfo.name}
                        content={post.content.substr(0, 200).concat('...')}
                        titleId={post.titleId}
                        title={post.title}
                        titleImg={post.titleImg}
                        rating={5}
                    />
                ))}
            </Posts>

            <PreviewDiv>
                <IndexPreview />
            </PreviewDiv>
        </Content>
    );
};

export default Feed;
