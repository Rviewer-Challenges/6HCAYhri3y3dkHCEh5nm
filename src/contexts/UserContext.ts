import { createContext } from 'react';

export interface User {
    uuid: String | null,
    display_name : String,
    email: String,
    photo_url: String,
}

export const UserContext = createContext<User | null>( null )