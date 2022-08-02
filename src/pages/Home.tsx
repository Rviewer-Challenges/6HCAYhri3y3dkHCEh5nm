import { useState } from 'react'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <div className="HOME">
            <p className='text-3xl font-bold text-center'>HERE CHAT</p>
        </div>
    )
}

export default Home
