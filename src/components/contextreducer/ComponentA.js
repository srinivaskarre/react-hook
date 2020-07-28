import React, {useContext} from 'react'
import ComponentB from './ComponentB'
import { UserContext } from './TopContextReducer'

function ComponentA() {
    const countContext = useContext(UserContext)
    return (
        <div>
            ComponetA  Counter - {countContext.counterState}
            <button onClick={()=> {countContext.counterDispatch({type:'increment', value: 1})}} >Click Me </button>
            <ComponentB />
        </div>
    )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
export default ComponentA