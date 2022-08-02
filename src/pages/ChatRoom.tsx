import { useState } from 'react'

function ChatRoom() {
    const [count, setCount] = useState(0)

    return (
        <div className="HOME">
            <p className='text-3xl font-bold text-center'>CHAT ROOM</p>
        </div>
    )
}

export default ChatRoom
