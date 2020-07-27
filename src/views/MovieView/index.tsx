import React, { FunctionComponent, useState, useEffect } from 'react';

import api from '../../services/api';

//Swiper
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

//Interfaces
import {
    Action,
    Adventure,
    Animation,
    ComingSoon,
    MostPopular,
    Scifi,
} from '../../types/types';

import { Content } from './styles';

const MovieView: FunctionComponent = () => {
    const [action, setAction] = useState<Action[]>([]);
    const [adventure, setAdventure] = useState<Adventure[]>([]);
    const [animation, setAnimation] = useState<Animation[]>([]);
    const [comingSoon, setComingSoon] = useState<ComingSoon[]>([]);
    const [mostPopular, setMostPopular] = useState<MostPopular[]>([]);
    const [scifi, setScifi] = useState<Scifi[]>([]);

    // useEffect(() => {
    //     api.get('/movieIndex').then(({ data }) => {
    //         setAction(data.action);
    //         setAdventure(data.adventure);
    //         setAnimation(data.animation);
    //         setComingSoon(data.comingSoon);
    //         setMostPopular(data.mostPopular);
    //         setScifi(data.scifi);
    //     });
    // }, []);

    new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 5,
        freeMode: true,
    });

    return (
        <Content>
            <div>
                <h3>Most popular right now</h3>
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
                <h3>In theaters</h3>
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
            <div>
                <h3>Action</h3>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {action.map((movie) => (
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
                <h3>Adventure</h3>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {adventure.map((movie) => (
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
                <h3>Sci-fi</h3>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {scifi.map((movie) => (
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
                <h3>Animation</h3>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {animation.map((movie) => (
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
        </Content>
    );
};

export default MovieView;
