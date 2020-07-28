import React, {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={()=> {setCount(prevState => prevState+1)}}> click me, clicked {count} times</button>
        </div>
    )
}

export default Counter
