import React, { FunctionComponent, useState, useEffect } from 'react';

import { IndexPreview, Post } from '../../components';

import api from '../../services/api';

import { Content, Posts, CreateAPost, MovieIcon, PreviewDiv } from './styles';

import { PostsInterface } from '../../types/ViewsTypes';

const Feed: FunctionComponent<PostsInterface> = () => {
    const [posts, setPosts] = useState<PostsInterface[]>([]);

    useEffect(() => {
        api.get('/posts')
            .then(({ data }) => setPosts(data))
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
                    <Post
                        key={post.id}
                        authorName={post.authorInfo.name}
                        content={post.content.substr(0, 200).concat('...')}
                        titleId={post.titleId}
                        title={post.title}
                        titleImg={post.titleImg}
                        rating={post.rating}
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
