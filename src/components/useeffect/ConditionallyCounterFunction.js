import React, { useState, useEffect } from 'react'

function CounterFunction() {

    const [count, setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=>{
        console.log('Function- Updating Document title')
        document.title = `You clicked ${count} times`
    }, [count])
    return (
        <div>
            <input type='text' onChange={(e)=>{setName(e.target.value)}}/>
            <button onClick = {()=>{setCount(count+1)}}> Function Counter Click Me</button>
        </div>
    )
}

export default CounterFunction
