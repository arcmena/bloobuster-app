export interface Media {
    id: string;
    resizedPoster: string;
}

export interface MediaCarouselInterf {
    title: string;
    media: Media[];
}

export interface PostInterface {
    authorName: string;
    content: string;
    titleId: string;
    title: string;
    titleImg: string;
    rating: number;
}