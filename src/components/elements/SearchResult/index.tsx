import React, { FunctionComponent } from 'react';

import { Container } from './styles';

import { SearchResultInterface } from '../../../types/ComponentTypes';

const SearchResult: FunctionComponent<SearchResultInterface> = ({ id, image, title }) => {
    return (
        <Container>
            <img src={image} alt="Media Image" />
            <label>{title}</label>
        </Container>
    );
}

export default SearchResult;