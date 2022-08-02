import { useState } from 'react'
import ChatMessageElement from '../components/ChatMessageElement';
import { ChatMessage } from '../contexts/ChatRoomContext';

const messagesOfRoom: ChatMessage[] = [
    {
        photo: 'https://lh3.googleusercontent.com/a-/AFdZucoOGqdrRq9a0NFFEWeV4t22oJ6Hzd6LuvsX3iPKng=s96-c',
        sended_at: new Date(),
        text: 'TEXTO de prueba con mensaje mas largo quiza que hasta que ocupe 2 o mas lineas en el dispositivo',
        user_id: '1',
        uuid: '212'
    },
    {
        photo: 'https://lh3.googleusercontent.com/a-/AFdZucoOGqdrRq9a0NFFEWeV4t22oJ6Hzd6LuvsX3iPKng=s96-c',
        sended_at: new Date(),
        text: 'TEXTO de prueba con mensaje mas largo quiza que hasta que ocupe 2 o mas lineas en el dispositivo y aun mas largo que el anterior para que amarre',
        user_id: '1',
        uuid: '212'
    }
]

const getMessages = () => {
    return messagesOfRoom.map((message: ChatMessage) => {
        return <ChatMessageElement {...message} />
    })
}

function ChatRoom() {
    return (
        <div className="grid lg:grid-cols-6 md:grid-cols-1">
            <div className='lg:block hidden p-5 text-center'>Chat Rooms List</div>
            <div className='lg:col-span-5 md:col-span-1'>
                <div className='p-5 shadow-lg'>CHAT HEADER</div>
                <div className='p-3'>
                    {getMessages()}
                </div>
            </div>
        </div>
    )
}

export default ChatRoom
