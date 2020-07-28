import React, {useReducer} from 'react'
import { act } from 'react-dom/test-utils';

const initialState = {
    firstCounter : 0,
    secondCounter: 10
};

const reducer = (state, action) => {
    switch(action.type){
        case 'increment': return { ...state, firstCounter: state.firstCounter + action.value}
        case 'decrement': return { ...state,firstCounter: state.firstCounter - action.value }
        case 'increment2': return {...state,secondCounter: state.secondCounter + action.value}
        case 'decrement2': return {...state,secondCounter: state.secondCounter - action.value}
        case 'reset': return initialState
        default: return state
    }
}
function CounterTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div> Counter - {state.firstCounter} </div>
            <div> Second Counter - {state.secondCounter} </div>
            <button onClick={()=>{dispatch({type: 'increment', value:1})}}>Increment</button>
            <button onClick={()=>{dispatch({type: 'decrement', value:1})}}>decrement</button>
            <button onClick={()=>{dispatch({type: 'increment', value: 3})}}>Increment By 3</button>
            <button onClick={()=>{dispatch({type: 'decrement', value: 3})}}>decrement By 3</button>
            <div> 
            <button onClick={()=>{dispatch({type: 'increment2', value: 3})}}>Increment second counter</button>
            <button onClick={()=>{dispatch({type: 'decrement2', value: 3})}}>decrement Second Counter</button>
                </div>
            <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
        </div>
    )
}

export default CounterTwo
