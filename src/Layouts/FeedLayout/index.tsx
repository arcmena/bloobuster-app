import React, { FunctionComponent } from 'react';

import { IndexPreview, Post } from '../../components';

import {
    Container,
    Content,
    MenuDiv,
    Posts,
    CreateAPost,
    MovieIcon,
    PreviewDiv,
} from './styles';

const FeedLayout: FunctionComponent = () => {
    return (
        <Container>
            <MenuDiv>
                <ul>
                    <li className="active">feed</li>
                    <li>movies</li>
                    <li>series</li>
                </ul>
            </MenuDiv>
            <Content>
                <Posts>
                    <CreateAPost>
                        {/* <input
                        type="text"
                        placeholder="Write a post or a review!"
                    /> */}
                        <span>Write a post or a review!</span>
                        <MovieIcon />
                    </CreateAPost>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </Posts>

                <PreviewDiv>
                    <IndexPreview />
                </PreviewDiv>
            </Content>
        </Container>
    );
};

export default FeedLayout;
