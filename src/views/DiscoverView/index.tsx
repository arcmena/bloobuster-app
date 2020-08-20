import React, { FunctionComponent, useState, useEffect, FormEvent, ChangeEvent } from 'react';

// Interfaces
import { Action, Adventure, Animation, Scifi, SearchResultInterface } from '../../types/ViewsTypes';

import { Content, SearchBarDiv, SearchContainer, Movies, TVSeries } from './styles';

import { MediaCarousel, SearchBar, SearchResult } from '../../components';

import api from '../../services/api';

const DiscoverView: FunctionComponent = () => {
    const [actionM, setActionM] = useState<Action[]>([]);
    const [adventureM, setAdventureM] = useState<Adventure[]>([]);
    const [animationM, setAnimationM] = useState<Animation[]>([]);
    const [scifiM, setScifiM] = useState<Scifi[]>([]);

    const [actionTV, setActionTV] = useState<Action[]>([]);
    const [adventureTV, setAdventureTV] = useState<Adventure[]>([]);
    const [animationTV, setAnimationTV] = useState<Animation[]>([]);
    const [scifiTV, setScifiTV] = useState<Scifi[]>([]);

    const [searchValue, setSeachValue] = useState('');
    const [searchData, setSearchData] = useState<SearchResultInterface[]>([]);
    const [activeSearch, setActiveSearch] = useState(false);

    // useEffect(() => {
    //     api.get('/movieIndex').then(({ data }) => {
    //         setActionM(data.action);
    //         setAdventureM(data.adventure);
    //         setAnimationM(data.animation);
    //         setScifiM(data.scifi);
    //     });
    // }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSeachValue(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(searchValue);
        setActiveSearch(true);
        api.get(`/search/${searchValue}`)
            .then(({ data }) => setSearchData(data.result))
            .catch((error) => console.error(error));
    };

    return (
        <Content>
            <SearchBarDiv>
                <SearchBar onChange={handleChange} onSubmit={handleSubmit} />
            </SearchBarDiv>
            {activeSearch ? (
                <SearchContainer>
                    {searchData.map((item) => (
                        <SearchResult key={item.id} id={item.id} image={item.resizedImage} title={item.title} />
                    ))}
                </SearchContainer>
            ) : (
                <>
                    <h2>Movies</h2>
                    <Movies>
                        <MediaCarousel title="Action" media={actionM} />
                        <MediaCarousel title="Adventure" media={adventureM} />
                        <MediaCarousel title="Animation" media={animationM} />
                        <MediaCarousel title="Sci-Fi" media={scifiM} />
                    </Movies>

                    <h2>TV Series</h2>
                    <TVSeries>
                        <MediaCarousel title="Action" media={actionTV} />
                        <MediaCarousel title="Adventure" media={adventureTV} />
                        <MediaCarousel title="Animation" media={animationTV} />
                        <MediaCarousel title="Sci-Fi" media={scifiTV} />
                    </TVSeries>
                </>
            )}
        </Content>
    );
};

export default DiscoverView;
