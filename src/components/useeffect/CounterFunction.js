import React, { useState, useEffect } from 'react'

function CounterFunction() {

    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `You clicked ${count} times`
    })
    return (
        <div>
            <button onClick = {()=>{setCount(count+1)}}> Function Counter Click Me</button>
        </div>
    )
}

export default CounterFunction
