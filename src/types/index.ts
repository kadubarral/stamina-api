export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

export interface Post {
    id: number;
    title: string;
    content: string;
    authorId: number;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}