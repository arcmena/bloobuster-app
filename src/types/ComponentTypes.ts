export interface Media {
    id: string;
    resizedPoster: string;
}

export interface MediaCarouselInterf {
    title: string;
    media: Media[];
}