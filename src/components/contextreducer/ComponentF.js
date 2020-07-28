import React, { useContext } from 'react'
import { UserContext } from './TopContextReducer'

function ComponentF() {

    const countContext = useContext(UserContext)
    return (
        <div>
            ComponentF - {countContext.counterState}
            <button onClick={()=> {countContext.counterDispatch({type:'increment', value: 1})}} >Click Me </button>
        </div>
    )
}

export default ComponentF
