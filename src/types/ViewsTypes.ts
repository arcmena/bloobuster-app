export interface PostsInterface {
    id: number;
    authorId: number;
    authorInfo: {
        name: string;
        email: string;
    };
    content: string;
    titleId: string;
    title: string;
    titleImg: string;
    rating: number;
}

export interface Action {
    id: string;
    resizedPoster: string;
}

export interface Adventure {
    id: string;
    resizedPoster: string;
}

export interface Scifi {
    id: string;
    resizedPoster: string;
}

export interface Animation {
    id: string;
    resizedPoster: string;
}