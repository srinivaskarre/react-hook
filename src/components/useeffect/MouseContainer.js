import React,{useState} from 'react'
import FunctionMouse from './FunctionMouse'

function MouseContainer() {
    const [displayToggle, setDisplayToggle] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplayToggle(!displayToggle)}>Toogle Display</button>
            {displayToggle && <FunctionMouse />}
        </div>
    )
}

export default MouseContainer
