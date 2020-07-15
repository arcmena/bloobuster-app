import React, { FunctionComponent, useEffect, useState } from 'react';

//Swiper
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import api from '../../../services/api';

import { Container } from './styles';

interface MostPopular {
    id: string;
    title: string;
    resizedPoster: string;
}

interface ComingSoon {
    id: string;
    title: string;
    resizedPoster: string;
}

export const IndexPreview: FunctionComponent = () => {
    const [comingSoon, setComingSoon] = useState<MostPopular[]>([]);
    const [mostPopular, setMostPopular] = useState<ComingSoon[]>([]);

    // useEffect(() => {
    //     api.get('/index').then(({ data }) => {
    //         setComingSoon(data.comingSoon);
    //         setMostPopular(data.mostPopular);
    //     });
    // }, []);

    new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 2,
        freeMode: true,
        // loop: true,
    });

    return (
        <Container>
            <div>
                <h3>Trending</h3>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {mostPopular.map((movie) => (
                            <div className="swiper-slide" key={movie.id}>
                                <img
                                    src={movie.resizedPoster}
                                    alt="movieImage"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <h3>Coming Soon</h3>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {comingSoon.map((movie) => (
                            <div className="swiper-slide" key={movie.id}>
                                <img
                                    src={movie.resizedPoster}
                                    alt="movieImage"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};
