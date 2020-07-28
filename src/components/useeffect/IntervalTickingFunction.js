import React, {useState, useEffect} from 'react'

function IntervalTickingFunction() {
    const [count, setCount] = useState(0)

    const tick = ()=>{
        console.log('updating count from func', count)
        setCount(count+1)
    }

    useEffect(()=>{

        const intrval = setInterval(tick, 2000)
        return ()=>{
            console.log('Cleaning up timer')
            clearInterval(intrval)
        }

    }, [count])
    return (
        <div>
            IntervalTickingFunction - {count}
        </div>
    )
}

export default IntervalTickingFunction
