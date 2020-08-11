import React, { FunctionComponent } from 'react';

//Swiper
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import { Container } from './styles';

import { MediaCarouselInterf } from '../../../types/ComponentTypes';

const MediaCarousel: FunctionComponent<MediaCarouselInterf> = ({ title, media }) => {

    new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 5,
        freeMode: true,
    });

    return (
        <Container>
            <h3>{title}</h3>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {media.map((movie) => (
                        <div className="swiper-slide" key={movie.id}>
                            <img src={movie.resizedPoster} alt="movieImage" />
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default MediaCarousel;