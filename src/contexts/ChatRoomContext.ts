import { createContext } from 'react';
import { User } from './UserContext';

export interface ChatMessage {
    uuid: String,
    user_id : String,
    text: String | null,
    photo: String | null,
    sended_at: Date
}

export interface ChatRoom {
    uuid: String,
    messages: ChatMessage[]
    users: User[]
}

export const ChatMessageContext = createContext<ChatRoom | null>( null )
