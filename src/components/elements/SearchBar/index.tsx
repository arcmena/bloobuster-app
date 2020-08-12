import React, { FunctionComponent } from 'react';

import { SearchForm } from './styles';

import { SearchBarInterface } from '../../../types/ComponentTypes';

const SearchBar: FunctionComponent<SearchBarInterface> = ({ onChange, onSubmit }) => {
    return (
        <SearchForm onChange={onChange} onSubmit={onSubmit}>
            <input type="text" name="search" id="search" placeholder="Search!" />
        </SearchForm>
    );
}

export default SearchBar;