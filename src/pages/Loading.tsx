import { useState } from 'react'

function Loading() {
    const [count, setCount] = useState(0)

    return (
        <div className="HOME">
            <p className='text-3xl font-bold text-center'>LOADING...</p>
        </div>
    )
}

export default Loading
