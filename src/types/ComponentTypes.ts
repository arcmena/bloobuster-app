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

export interface SearchBarInterface {
    onChange: any;
    onSubmit: any;
}

export interface SearchResultInterface {
    id: string;
    title: string;
    image: string;
}