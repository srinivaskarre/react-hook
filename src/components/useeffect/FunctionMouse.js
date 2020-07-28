import React, { useState, useEffect } from 'react'

function FunctionMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const eventListener = (e)=> {
        console.log('changing co-ords')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('Attaching event listener')
        window.addEventListener('mousemove', eventListener)

        return ()=> {
            console.log('cleaing up the listener')
            window.removeEventListener('mousemove', eventListener)
        }
    },[])
    return (
        <div>
            Function x- {x} , y- {y}
        </div>
    )
}

export default FunctionMouse
