import React, {useReducer} from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch(action){
        case 'increment': return state+1
        case 'decrement': return state-1
        case 'reset': return initialState
        default: return state
    }
}
function MultipleReducers() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [counterTwo, dispatchTwo] = useReducer(reducer, initialState)
    return (
        <div>
            <div>
            <div> Counter - {state} </div>
            <button onClick={()=>{dispatch('increment')}}>Increment</button>
            <button onClick={()=>{dispatch('decrement')}}>Ddecrement</button>
            <button onClick={()=>{dispatch('reset')}}>Reset</button>
            </div>
            <div>
            <div> Counter two - {counterTwo} </div>
            <button onClick={()=>{dispatchTwo('increment')}}>Increment</button>
            <button onClick={()=>{dispatchTwo('decrement')}}>Ddecrement</button>
            <button onClick={()=>{dispatchTwo('reset')}}>Reset</button>
            </div>

        </div>
    )
}

export default MultipleReducers
