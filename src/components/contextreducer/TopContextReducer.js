import React, { useContext, useReducer } from 'react'

import ComponentA from './ComponentA'

const initialState = 0

export const UserContext = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'increment' : return state + action.value
        case 'decrement' : return state - action.value
        case 'reset' : return initialState
    }
}

function TopContextReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <UserContext.Provider value={ {counterState: state, counterDispatch: dispatch}}>
                <ComponentA/>
            </UserContext.Provider>
            
        </div>
    )
}

export default TopContextReducer
